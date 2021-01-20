let mongoose = require("mongoose");

//create the schema
let UserSchema = new mongoose.Schema({
  //objects as parameters with structure
  name: { type: String, required: true },
  hobby: { type: String, required: true },
});

//compile Schema to a model
module.exports = mongoose.model("usersDeployTest", UserSchema);
