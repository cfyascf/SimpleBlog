const validateBody = (req, res, next) => {
    const validated = schema.parse(req.body)
    req.body = validated

    return next()
}