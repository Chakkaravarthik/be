import bcrypt from 'bcrypt';
import express from 'express';
import jwt from 'jsonwebtoken';
import userModel from '../../Db_utils/models/userModel.js';

const loginRouter = express.Router();

loginRouter.post('/', async (req, res) => {
    const logindata = req.body;

    // Validate input
    if (!logindata.email || !logindata.password) {
        return res.status(400).send({ msg: 'Email and password are required' });
    }

    try {
        // Check if user exists
        const userobj = await userModel.findOne({ email: logindata.email });
        if (!userobj) {
            return res.status(404).send({ msg: 'User not found' });
        }

        // Verify password
        const passwordMatch = await bcrypt.compare(logindata.password, userobj.password);
        if (passwordMatch) {
            // Generate JWT with limited payload
            const userobj1 = userobj.toObject();
            const userobjtoken = jwt.sign(userobj1, process.env.JWT_SECRET);

            res.status(200).send({ msg: 'User credentials matched', code: 1, userwebtoken: userobjtoken });
        } else {
            res.status(401).send({ msg: 'Password does not match', code: 0 });
        }
    } catch (error) {
        console.error('Error during login:', error.message);
        res.status(500).send({ msg: 'Internal server error' });
    }
});



loginRouter.get('/', async (req, res) => {
    try {
        const userlist = await userModel.find({});

        if (userlist.length === 0) {
            return res.status(404).send({ msg: 'No users available' });
        }

        return res.status(200).send({ userlist });

    } catch (e) {
        console.error(e);
        return res.status(500).send({ msg: 'Internal Server Error' });
    }
});


export default loginRouter;
