// import { Order } from "../models/order.model.js";


// export const orderController = {
//   create: (req, res, next) => {
//     try {
//       //
//     } catch (err) {
//       next(err);
//     }
//   },
//   update: (req, res, next) => {
//     try {
//       //
//     } catch (err) {
//       next(err);
//     }
//   },
//   findAll: (req, res, next) => {
//     try {
//       //
//     } catch (err) {
//       next(err);
//     }
//   },
//   findOne: (req, res, next) => {
//     try {
//       //
//     } catch (err) {
//       next(err);
//     }
//   },
//   delete: (req, res, next) => {
//     try {
//       //
//     } catch (err) {
//       next(err);
//     }
//   },
// };


import { Order } from "../models/order.model.js";

export const orderController = {
  create: async (req, res, next) => {
    try {
      const body = req.body

      const order = new Order(body);
      await order.save();
      res.status(201).json(order);
      return
    } catch (err) {
      return res.status(400).json({ error: 'Invalid User id or Product id' });

      // next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const id = req.params.id;
      const { status, total, user, product } = req.body;

      if (!id) {
        return res.status(400).json({ message: "Id is required" });
      }



      const order = await Order.findOneAndUpdate(
        { _id: id },
        { status, total, user, product },
        { new: true, runValidators: true }
      );

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      res.status(200).json({
        message: "Order updated successfully",
        order
      });
    } catch (err) {


      // return res.status(404).json({ message: "Order not found" });
      // next(err);

      if (err.name === "CastError") {
        return res.status(400).json({ message: "Invalid order ID" });
      }
      if (err.name === "ValidationError") {
        return res.status(400).json({ message: err.message });
      }
      next(err);
    }
  },
  findAll: async (req, res, next) => {
    try {
      const orders = await Order.find().exec();

      if (!orders) {
        res.status(404).json({ message: "Orders not found!" });
        return;
      }

      res.status(200).json(orders);
    } catch (err) {
      res.status(404).json({ message: "Orders not found!" });

      // next(err);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const id = req.params.id;
      // console.log(id)
      const order = await Order.findOne({ _id: id }).populate('user').populate('product').exec();

      if (!order) {
        res.status(404).json({ message: "Order not found!" });
        return;
      }

      res.status(200).json(order);

    } catch (err) {
      res.status(404).json({ message: "Order not found!" });
      // next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const id = req.params.id;

      const order = await Order.findOneAndDelete({ _id: id }).exec();
      if (!order) {
        res.status(404).json({ message: "Order not found!" });
        return;
      }
      // console.log(order)
      res.status(200).json({ message: "Order deleted successfully!" });
    } catch (err) {
      res.status(404).json({ message: "Order not found!" });
      // next(err);
    }
  },
};
