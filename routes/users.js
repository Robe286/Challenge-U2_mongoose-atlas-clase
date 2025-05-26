//creamos las rutas y en ellas los diferentes endpoints(CRUD).
// requerimos express, router y el modelo

const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

router.post('/create', async (req, res) => {
    try { 
        const user = await User.create(req.body);
        res.status(201).send(user);

    } catch {
        res
            .status(500)
            .send({message: 'there was a problem trying to create the user'});
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.status(201).send(users);

    } catch (error) {
        console.error(error)
        res.status(500).send({message: 'there was a problem trying to get the users'});
    }
})

module.exports = router;


