import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  country: {
    type: String,
  },
  zipCode: {
    type: String,
  }
})


const User = models.User || model("User", UserSchema);

export default User;