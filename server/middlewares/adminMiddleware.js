const adminMiddleware = (req, res, next) => {
    try {
        const adminRole = req.user.isAdmin;
        if (!adminRole) {
            return res.status(401).json({ message: "Unauthorized", success: false })
        }
        next()
    } catch (err) {
        next(err)
    }
}

export default adminMiddleware