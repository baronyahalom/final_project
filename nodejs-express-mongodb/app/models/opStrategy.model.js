module.exports = mongoose => {
  const opStrategy = mongoose.model(
    "opStrategy",
    mongoose.Schema(
      {
        id: String,
        tutorialAns: String,
        q1: Number,
        q2: Number,
        countBack: Number,
        whoWin: String
      },
      { timestamps: true }
    )
  );

  return opStrategy;
};


// module.exports = mongoose => {
//   var schema = mongoose.Schema(
//     {
//       _id: String,
//       q1: Number,
//       q2: Number
//     },
//     { timestamps: true }
//   );
//
//   schema.method("toJSON", function() {
//     const { __v, _id, ...object } = this.toObject();
//     object._id = schema._id;
//     return object;
//   });
//
//   const opStrategy = mongoose.model("opStrategy", schema);
//   return opStrategy;
// };
