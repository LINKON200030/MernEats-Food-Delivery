import { auth } from "express-oauth2-jwt-bearer";
import jwt from 'jsonwebtoken';
import UserModel from "../models/UserModel.js";

export const jwtCheck = auth({
    audience: 'Food-Ordering-App-Api',
    issuerBaseURL: 'https://dev-jwdht8f1k5bqtwje.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

export const jwtParse = async (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization) {
        const token = authorization.split(' ')[1];
        try {
            const decoded = jwt.decode(token);

            if (decoded) {
                req.Auth0Id = decoded.sub;

                if (req.Auth0Id) {
                    const user = await UserModel.findOne({ Auth0Id: req.Auth0Id });

                    if (user) {
                        req.userId = user._id.toString();
                        req.user = user;
                        req.headers.userId = user._id.toString();
                        next();
                    } else {
                        res.status(401).json({ message: "Unauthorized" });
                    }
                }
            } else {
                res.status(401).json({ message: "Unauthorized" });
            }
        } catch (e) {
            res.status(401).json({ message: "Unauthorized" });
        }
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
};

