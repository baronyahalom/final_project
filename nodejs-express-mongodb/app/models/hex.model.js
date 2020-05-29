
// module.exports = mongoose => {
//   var schema = mongoose.Schema(
//     {
//       workerID: String,
//       age: Number,
//       gender: String,
//       hand: String,
//       education: String
//     },
//     { timestamps: true }
//   );
//
//   schema.method("toJSON", function() {
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
//   });
//
//   const User = mongoose.model("user", schema);
//   return User;
// };

module.exports = mongoose => {
  const User = mongoose.model(
    "user",
    mongoose.Schema(
      {
        workerID: String,
        age: Number,
        gender: String,
        hand: String,
        education: String
      },
      { timestamps: true }
    )
  );

  return User;
};


