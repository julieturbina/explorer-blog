const mongoose = require('mongoose');
const Event = require('../models/event');

const dbName = 'explorer-blog';
// mongoose.connect(process.env.MONGODB_URI);
mongoose.connect(`mongodb://localhost/explorer-blog`);

const event = [
  {
    title: "Runway Show",
    detail: "Couture and Ready to Wear",
    location: "Miami",
    review: "By Invitation Only",
    image: "",
  },
  {
    title: "Trunk Shows",
    detail: "Ready to Wear",
    location: "Miami",
    review: "No Invitation Necessary",
    image: "",
  },
  {
    title: "Yoga Sessions",
    detail: "Health and Wellness",
    location: "Miami",
    review: "Free",
    image: "",
  },
 
  {
    title: "Art Walk",
    detail: "Entertainment",
    location: "Miami",
    review: "Entrance Fee",
    image: "",
  },
  {
    title: "Skin Care",
    detail: " Beauty",
    location: "Miami",
    review: "Fee and Reservation required",
    image: "",
  },
 
];

Event.create(event, (err) => {
    if (err) { throw(err); }
    console.log(`Created ${event.length} event`);
    mongoose.connection.close();
  });