const validate = (schema) => async (req, res, next) => {
    try {
        const parseData = await schema.parseAsync(req.body)
        req.body = parseData
        next()
    } catch (error) {
        const err = {
            message: error.errors[0].message,
            status: 400
        }
        next(err)
    }
}

export default validate