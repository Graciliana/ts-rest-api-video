
/** 
* file: src/router/index.ts
* description: file responsible for
* data: 06/29/2023
* author: Graciliana Kascher 
* Creditos: Glaucia Lemos <Twitter: @glaucia_lemos86></Twitter:>
**/

import express, { Application, Request, Response } from 'express';
import ApiController from '../controllers/api';

const router = express.Router();
router.get('/api', async (req: Request, res: Response) => {
  const apiController = new ApiController();
  const apiResponse = await apiController.getMessage();
  return res.send(apiResponse);

});
export default router;