import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema({
  speaker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  listener: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  text: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
})


const Conversation = mongoose.models.Conversation || mongoose.model("Conversation", ConversationSchema);

export default Conversation;