import { Schema, model, models } from "mongoose";

const ClassSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
    default: new Date(),
  },
  endTime: {
    type: Date,
  }
}, {
  timestamps: true
});


const Class = models.Class || model("Class", ClassSchema);


export default Class;