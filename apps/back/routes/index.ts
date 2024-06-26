import Router from 'express';
import controllers from '../controllers';
//routes
const routes = Router();
routes.post('/login', controllers.login);
routes.post('/update', controllers.verifyToken, controllers.updatePassword);
routes.get('/logout', controllers.logout);
module.exports = routes;
