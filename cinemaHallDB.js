import mongoose from "mongoose";

// const serviceSchema = mongoose.Schema({
//   icon: String,
//   title: String,
//   description: String,
//   url: String,
// });

// const reviewSchema = mongoose.Schema({
//   img: String,
//   name: String,
//   title: String,
//   description: String,
// });

const bookingSchema = mongoose.Schema({
  movieName: String,
  movieId: Number,
  numberOfBookings: Number,
  date: String,
  userName: String,
  emailID: String,
});

// const serviceCollection = mongoose.model("serviceCollection", serviceSchema);

// const reviewCollection = mongoose.model("reviewCollection", reviewSchema);

const bookingCollection = mongoose.model("bookingCollection", bookingSchema);

export { bookingCollection };
