import { Schema, model, models } from "mongoose";

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  classes: {
    type: [Schema.Types.ObjectId],
    ref: "Class",
  },
  teacher: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});


const Course = models.Course || model("Course", CourseSchema);


export default Course;

