const express = require('express');
const router = express.Router();
const Event = require("../models/event");
const User  = require("../models/user");
const Blog = require('../models/blog');

const Events = require('../models/event');

/* GET EVENT LIST. */
// router.get('/event', (req, res, next) => {
//   Event.find(eventList)
//   .then(eventList => {
//     if (err) {
//       res.json(err);
//       return;
//     }
//     res.json(eventList);
//   })
//   .catch(error => next(error));
// });

// /* CREATE A NEW EVENT. */
// router.post('/events', (req, res, next) => {
//   const theEvent = new Event({
//     name: req.body.name,
//     detail: req.body.detail,
//     location: req.body.location,
//     review: req.body.review,
//     image: req.body.image || ''
//   });

//   theEvent.save()
//   .then(theEvent => {
//     res.json({
//       message: 'A New Event has been created!',
//       id: theEvent._id
//     });
//   })
//   .catch(error => next(error));
// });

//GET A SINGLE EVENT=========

// router.get('/event/:id', (req, res, next) => {
//   if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: 'Specified id is not valid' });
//     return;
//   }

//   Event.findById(req.params.id)
//   .then(theEvent => {
//       res.json(theEvent);
//   })
//   .catch(error => next(error));
// });

//EDIT AN EVENT =========
  
// router.put('/events/:id', (req, res, next) => {
//   if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: 'Specified id is not valid' });
//     return;
//   }

//   const updates = {
//     name: req.body.name,
//     detail: req.body.detail,
//     location: req.body.location,
//     review: req.body.review,
//     image: req.body.image || ''
//   };

//    Event.findByIdAndUpdate(req.params.id, updates)
//   .then(event => {
//     res.json({
//       message: 'Event had been updated successfully'
//     });
//   }) 
//   .catch(error => next(error));     
// });

// /* DELETE AN EVENT */
// router.delete('/events/:id', (req, res, next) => {
//   if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: 'Specified id is not valid' });
//     return;
//   }

//   Event.remove({ _id: req.params.id })
//   .then(message => {
//     return res.json({
//       message: 'Event has been removed!'
//     });
//   })
//   .catch(error => next(error));
// });

// module.exports = router;





//======ALL COMMENTED BELOW TO TEST ABOVE ONLY=====UNCOMMENT BELOW

//=GET EVENT PAGE(LIST ALL EVENTS) = TESTED - DON'T TOUCH!

router.get('/event', (req, res, next) => {
  Event.find()
    .then(event => {
      // console.log(event);
      res.render("event", { event });
    })
    .catch(error => {
      console.log(error);
    });
});

//===GET EVENT DETAIL========TESTED = DON'T TOUCH!
router.get('/event/:id', (req, res, next) => {
  let eventId = req.params.id;
  Event.findOne({'_id': eventId})
    .then(event => {
      res.render("event-detail", { event });
    })
    .catch(error => {
      console.log(error);
    });
});
//===GET EVENT-ADD PAGE===TESTED - DON'T TOUCH!

router.get('/event-add', (req, res, next) => {
  res.render("event-add");
});

// //=== POST NEW EVENTS(add to database) ====TESTED - DON'T TOUCH!

router.post('/event-add', (req, res, next) => {
  const { title, detail, location, review } = req.body;
  const newEvent = new Event({ title, detail, location, review});
  newEvent.save()
  .then((event) => {
    res.redirect('/event-add');
  })
  .catch((error) => {
    console.log(error);
  });
});

//===COMMENTED ABOVE TO TEST ABOVE ONLY===DO NOT TOUCH ABOVE====UNCOMMENT ABOVE







/////===COMMENTED FOR TESTING BELOW - MAY DELETE===========


//===EDIT A SINGLE EVENT=======For testing !!!!======

router.get('/event-edit', (req, res, next) => {
res.render("event-edit");

// router.get('/event/edit', (req, res, next) => {
//   Event.findOne({_id: req.query.event_id})
//   .then((event) => {
//   res.render("event-edit", {event});
// })
// .catch((error) => {
//   console.log(error);
// });
// });

router.get('/event/edit/:id', (req, res, next) => {
Event.findById({_id: req.params.id})
.then((procedure) => {
  res.render("procedure-edit", {procedure});
})
.catch((error) => {
  console.log(error);
});
});

//edit an event

router.post('/event/edit', (req, res, next) => {
  const { title, detail, location, review } = req.body;
  Event.update({_id: req.query.event_id}, { $set: { title, detail, location, review }})
  .then((event) => {
    res.redirect('/event');
  })
  .catch((error) => {
    console.log(error);
  });
});
});

module.exports = router;