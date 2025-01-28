import express from 'express';
import screenModel from '../../Db_utils/models/screenmodel.js';


const screenRouter = express.Router();

screenRouter.get('/', async (req, res) =>{

    try{
         let screens = await screenModel.find({});
         res.status(200).send(screens);
    }catch(e){
        console.log(e)
    }
})


export default screenRouter;