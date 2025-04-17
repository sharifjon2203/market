import { User } from "../models/user.model.js";




// const defaultAdmin = { login: "admin", password: "admin" };

export const authMiddleware = async (req, res, next) => {
    try {
        const str = (req.headers.authorization || "").split(" ")[1]
        const [login, password] = Buffer.from(str, "base64").toString("utf-8").split(":");

        const user = await User.findOne({ email: login }).exec()

        if (!user) {
            res.status(401).send("Autentification required")
            return;
        }

        if (login === user.email && password === user.password) {
            // res.send("access granted")
            req.user = user;
            next()
            return;
        }
        res.status(401).send("Autentification required")

    } catch (e) {
        res.status(401).send("Autentification required")
        // next(e)
    }
}