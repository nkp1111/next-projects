import mongoose from "mongoose";
import { compare, hash } from "bcrypt";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  friends: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
  }
}, {
  timestamps: true,
})


UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await hash(this.password, 10);
})

UserSchema.methods.comparePassword = async function (password: string) {
  return await compare(password, this.password);
}


const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User
