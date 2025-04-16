import { User } from "../models/index.js";

export const userController = {

  profile: async (req, res, next) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({
        user: { full_name: user.full_name, email: user.email },
      });
    } catch (err) {
      next(err);
    }
  },


  update: async (req, res, next) => {
    try {
      const { email, newEmail, newFull_name, password, newPassword } = req.body;

      if (!email && !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }



      const user = await User.findOneAndUpdate(
        { email, password },
        { full_name: newFull_name, email: newEmail, password: newPassword },
        { new: true, runValidators: true }
      );

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({
        message: "User updated successfully",
        user
      });
    } catch (err) {
      next(err);
    }
  },


  delete: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }


      const isPasswordValid = password === user.password;
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Incorrect password or email!' });
      }

      await User.deleteOne({ email });
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
      console.error('Error deleting user:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }


};
