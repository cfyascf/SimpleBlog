const express = require('express')
const router = express.Router();
const User = require('../models/user.model')

router
    .get('/api/v1/user/:id?', (req, res) => {
        const { id } = req.params
        // const { id } = req.query

        if(id != null) return res.send(id)
            
        return res.send("hello world")
    })
    .post('/api/v1/user', async (req, res) => {
        const { name, lastname, salary } = req.body;

        const data = {
            name: name,
            lastname: lastname,
            salary: salary
        }

        const newUser = await User.create(data);
        return res.status(201).send({ 
            message: "User created successfully!", 
            body: newUser 
        })
    })

module.exports = router;