module.exports = mongoose => {
  const part1 = mongoose.model(
    "part1",
    mongoose.Schema(
      {
        id: String,
        q1: String,
        q2: Number,
        q3: Number,
        q4: Number,
        q5: Number,
        A: Number,
        B: Number,
        C: Number,
        D: Number,
        E: Number,
        q6: String,
        numOfTrying: Number
      },
      { timestamps: true }
    )
  );

  return part1;
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
