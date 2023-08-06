const express = require('express');
const jwt = require('jsonwebtoken');
const usersBLL = require("../BLL/usersBLL");

const router = express.Router();

// Entry Point: 'http://localhost:8000/auth

router.route('/login').post(async(req, res) => {
  const { username, password } = req.body;
  const users = await usersBLL.getAllUsers();
  const user = users.find((user) => user.username === username);
console.log(user)
  // if 'username' and 'password' are exist in DB
  if (user.password===password) {
    const userId = 'someId'; // find user's ID
    const ACCESS_SECRET_TOKEN = 'someKey';

    const accessToken = jwt.sign(
      { id: userId },
      ACCESS_SECRET_TOKEN
      // { expiresIn: 7200 } // expires after 7200s (2 hours)
    );
    res.json({ accessToken });
  }

  res.status(401); // Unauthorized
});

router.route('/verify').post((req, res) => {
console.log(req.body)

    const {token} = req.body;
console.log(token)
    if (!token) {
      res.status(401).json('No Token Provided!');
    }
  
    const ACCESS_SECRET_TOKEN = 'someKey';
  
    jwt.verify(token, ACCESS_SECRET_TOKEN, (err, data) => {
      if (err) {
        res.status(500).json('Failed to authenticate token');
      }
      console.log(data);
      // Get data from DB and send to the user
     
      res.json(true);
    });

});


module.exports = router;
