import { Request, Response } from 'express';

const logout = async (req: Request, res: Response) => {
	try {
        const bearerHeader = req.headers['authorization']
        if(typeof bearerHeader!=='undefined'){
          const bearerToken = bearerHeader.split(' ')[1]
          //add bearerToken to blacklist
        }
        return res.sendStatus(200)
	} catch (err) {
		console.log(err);
		return res.sendStatus(500);
	}
};

export default logout;
