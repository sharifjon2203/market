const defaultAdmin = { login: "admin", password: "admin" };

export const authMiddleware = (req, res, next) => {
    try {
        const str = (req.headers.authorization || "").split(" ")[1]
        const [login, password] = Buffer.from(str, "base64").toString("utf-8").split(":");

        if (login === defaultAdmin.login && password === defaultAdmin.password) {
            // res.send("access granted")
            next()
            return;
        }
        res.status(401).send("Autentification required")

    } catch (e) {
        next(e)
    }
}