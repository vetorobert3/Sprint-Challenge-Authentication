const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model.js');

router.post('/register', async (req, res) => {
  // implement registration
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  try {
    const saved = await Users.add(user)
    res.status(201).json(saved)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  // implement login
  let {username, password} = req.body;

  try {
    const user = await Users.findBy({username}).first();
    if (user && bcrypt.compareSync(password, user.password)) {
      req.session.user = user;
      res.status(200).json({message: 'Welcome'});
    } else {
      res.status(401).json({message: 'invalid'})
    }
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
});

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.send(`can't logout`)
      } else {
        res.send("See you next time!")
      }
    });
  } else {
    res.end();
  }
})

module.exports = router;
