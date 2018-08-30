const express = require('express');
const router = express.Router();
const Event = require("../models/event");
const User  = require("../models/user");
const Blog = require('../models/blog');

//=========Get event page===============for testing!
router.get('/event', (req, res, next) => {
  if (!req.user){
    res.redirect('/event');
  }
  Event.find()
    .then(event => {
      // console.log(procedures);
      res.render("event", { event });
    })
    .catch(error => {
      console.log(error);
    });
});

//=========Event detail view===============for testing!



  // router.get('/event/add', (req, res, next) => {
  //   res.render("event-add");
  // });
  
  
  // router.get('/event', (req, res, next) => {
  //   Event.find()
  //     .then(event => {
  //       console.log(event);
  //       res.render("event", { event });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // });
  
  // router.get('/event/:id', (req, res, next) => {
  //   let eventId = req.params.id;
  //   if (!/^[0-9a-fA-F]{24}$/.test(eventId)) {
  //     return res.status(404).render('not-found');
  //   }
  //   Event.findOne({'_id': eventId})
  //     .populate('location')
  //     .then(event => {
  //       if (!event) {
  //           return res.status(404).render('not-found');
  //       }
  //       res.render("event-detail", { event });
  //     })
  //     .catch(next);
  // });
  
  // router.post('/event/add', (req, res, next) => {
  //   const { title, detail, location, review } = req.body;
  //   const newEvent = new Event({ title, detail, location, review });
  //   newEvent.save()
  //   .then((event) => {
  //     res.redirect('/event');
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // });
  
  // router.get('/event/edit', (req, res, next) => {
  //   Event.findOne({_id: req.query.event_id})
  //   .then((event) => {
  //     res.render("event-edit", {event});
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // });
  
  // router.post('/event/edit', (req, res, next) => {
  //   const { title, detail, location, review } = req.body;
  //   Event.update({_id: req.query.event_id}, { $set: {title, detail, location, review }}, { new: true })
  //   .then((event) => {
  //     res.redirect('/event');
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // });
  
  // router.get('/authors/add', (req, res, next) => {
  //   res.render("author-add");
  // });
  
  // router.post('/authors/add', (req, res, next) => {
  //   const { name, lastName, nationality, birthday, pictureUrl } = req.body;
  //   const newAuthor = new Author({ name, lastName, nationality, birthday, pictureUrl});
  //   newAuthor.save()
  //   .then((book) => {
  //     res.redirect('/books');
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // });
  
  // router.post('/reviews/add', (req, res, next) => {
  //   const { user, comments } = req.body;
  //   Event.update({ _id: req.query.event_id }, { $push: { reviews: { user, comments }}})
  //   .then(event => {
  //     res.redirect('/event/' + req.query.event_id);
  //   })
  //   .catch((error) => {
  //     console.log(error); 
  //   });
  // });
module.exports = router;
