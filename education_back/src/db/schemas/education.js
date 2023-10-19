import { Schema, model } from "mongoose";

const EducationSchema = new Schema(
  {
    userid: {
      type: String,
      required: true,
      ref: "User",
    },
    eduId: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: false,
    },
    startDate: {
      type: Date,
      required: false,
    },
    endDate: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const EducationModel = model("Education", EducationSchema);

export { EducationModel };
