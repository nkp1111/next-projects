import { Schema, model, models } from "mongoose";
import { hash, compare } from "bcrypt";

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  bio: {
    type: String,
  },
  courses: {
    type: [Schema.Types.ObjectId],
    ref: "Course",
  },
  classes: {
    type: [Schema.Types.ObjectId],
    ref: "Class",
  }
}, {
  timestamps: true
});

// hash user password before saving
StudentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await hash(this.password, 10)
})

// check if password is same (return boolean)
StudentSchema.methods.comparePassword = async function (password: string) {
  return await compare(password, this.password);
}

const Student = models.Student || model("Student", StudentSchema);


export default Student;

