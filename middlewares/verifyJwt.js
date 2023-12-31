import jwt from "jsonwebtoken"

const verifyJwt = async (req, res, next) => {
    // token stored as Bearer token_code
    // const authHeader = req.headers.authorization || req.headers.Authorization;
    // if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    // const token = authHeader.split(' ')[1];

    const token = req.headers.authorization || req.headers.Authorization;
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err,decoded) => {
            if (err) {
                return res.sendStatus(403)
            }
            next()
        }
    )
}

export { verifyJwt }





