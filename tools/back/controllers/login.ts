import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const login = async (req: Request, res: Response) => {
	try {
		const { name, password } = req.body;
		const { username, passwordHash, privateKey } = process.env;
		let token = undefined;
		if (name && password && passwordHash && privateKey) {
			const match = await bcrypt.compare(password, passwordHash);
			if (name === username && match)
				token = await jwt.sign({ username: username }, privateKey, {
					expiresIn: '1h',
				});
			return res.json({ token: token, username: username });
		}

		return res.sendStatus(401);
	} catch (err) {
		console.log(err);
		return res.sendStatus(500);
	}
};

export default login;
