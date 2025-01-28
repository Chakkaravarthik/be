import express from 'express';
import theaterModel from '../../Db_utils/models/theatermodel.js';

const theaterRouter = express.Router();

theaterRouter.get('/', async(req, res)=>{

    try{
        let theater = await theaterModel.find({});
        if(!theater){
            return res.status(200).send({msg : 'customer not available'});
        }
        res.status(200).send(theater);

    }catch(e){
        console.log('error',e)
        res.status(500).send({ msg: 'Something went wrong' });
;    }
})


theaterRouter.post('/', async(req, res)=>{

    const {theatername, theateraddress, theateremail, theaterphonenumber}= req.body;

    try{
        let id = Date.now().toString();
        let screens = [];
        let newtheater = new theaterModel({id,theatername,theateraddress, theateremail, theaterphonenumber});
        let savedtheaterdata = await newtheater.save() // validate and save a theater details
        return res.status(200).send({msg :"theater data added" , code :1 , savedtheaterdata});
    }catch(e){
        console.log(e);
    }
})


export default theaterRouter;