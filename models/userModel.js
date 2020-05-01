const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  ids: {
    type: String,
    required: true
  },
  phones: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  supervisors: {
    type: String,
    required: true
  },
  workingdays: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});
// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);

