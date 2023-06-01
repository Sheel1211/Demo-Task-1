import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  class: Number,
  subjects: [
    {
      type: String,
    },
  ],
  Mode:String,
});

export const Student = mongoose.model("Student",studentSchema);
