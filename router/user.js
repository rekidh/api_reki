const express = require('express');
const UserRouter = express.Router();

const User = require('../schema/user'); 

UserRouter.route('/user').post(function (req, res) {
  const user = new User(req.body);
  user.save()
    .then(user => {
      res.json('User added successfully');
    })
    .catch(err => {
      res.status(400).send("failed save to database");
    });
});



module.exports = UserRouter;