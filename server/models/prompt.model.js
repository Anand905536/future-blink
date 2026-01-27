import mongoose from "mongoose";

const promptSchema = new mongoose.Schema(
  {
    prompt: {
      type: String,
      required: true,
    },
    response: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PromptQuestion = mongoose.model("PromptQuestion", promptSchema);

export default PromptQuestion;
