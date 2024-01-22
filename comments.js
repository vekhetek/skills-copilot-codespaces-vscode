// create web server using express
const express = require('express');
const router = express.Router();
// import comments model
const comments = require('../models/comments');

// GET: /comments
router.get('/', (req, res) => {
  // res.send('GET: /comments');
  comments.find()
    .then((data) => {
      console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
});

// POST: /comments
router.post('/', (req, res) => {
  console.log('Body: ', req.body);
  const data = req.body;
  const newComments = new comments(data);
  // save data
  newComments.save((error) => {
    if (error) {
      res.status(500).json({ msg: 'Sorry, internal server errors' });
    } else {
      // res.send('Data has been saved!');
      res.json({
        msg: 'Your data has been saved!!'
      });
    }
  });
});

// PUT: /comments
router.put('/:id', (req, res) => {
  console.log('Body: ', req.body);
  const data = req.body;
  comments.findByIdAndUpdate(req.params.id, data, (error) => {
    if (error) {
      res.status(500).json({ msg: 'Sorry, internal server errors' });
    } else {
      // res.send('Data has been updated!');
      res.json({
        msg: 'Your data has been updated!!'
      });
    }
  });
});

// DELETE: /comments
router.delete('/:id', (req, res) => {
  comments.findByIdAndDelete(req.params.id, (error) => {
    if (error) {
      res.status(500).json({ msg: 'Sorry, internal server errors' });
    } else {
      // res.send('Data has been deleted!');
      res.json({
        msg: 'Your data has been deleted!!'
      });
    }
  });
});

module.exports = router;
