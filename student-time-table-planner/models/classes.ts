import { Schema, model, models } from "mongoose";

const ClassSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  }
}, {
  timestamps: true
});


const Class = models.Class || model("Class", ClassSchema);


export default Class;