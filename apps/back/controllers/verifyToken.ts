import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface IGetUserAuthInfoRequest extends Request {
	user: { username: string | null; verified: boolean };
}
interface JwtPayload {
	username: string;
}
const verifyToken = async (
	req: IGetUserAuthInfoRequest,
	res: Response,
	next: NextFunction,
) => {
	try {
		req.user = { username: null, verified: false };
		const { privateKey } = process.env;
		const bearerHeader = req.headers['authorization'];
		if (bearerHeader && privateKey) {
			const bearerToken = bearerHeader.split(' ')[1];
			const { username } = jwt.verify(bearerToken, privateKey) as JwtPayload;
			if (username) {
				req.user = { username, verified: true };
				next();
			}
		}
		return res.sendStatus(403);
	} catch (err) {
		console.log(err);
		return res.sendStatus(500);
	}
};

export default verifyToken;
