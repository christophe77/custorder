import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

const saltRounds = 10;

const updatePassword = async (req: Request, res: Response) => {
	try {
		const { oldPassword, newPassword } = req.body;
		const { passwordHash } = process.env;
		if (oldPassword && newPassword && passwordHash) {
			const match = await bcrypt.compare(oldPassword, passwordHash);
			if (match) {
				const hash = await bcrypt.hash(newPassword, saltRounds);
				return res.sendStatus(200);
			}
		}
		return res.sendStatus(401);
	} catch (err) {
		console.log(err);
		return res.sendStatus(500);
	}
};

export default updatePassword;
