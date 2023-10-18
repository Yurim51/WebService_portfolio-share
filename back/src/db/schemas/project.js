import { Schema, model } from "mongoose";
const mongoose = require('mongoose');

const ProjectSchema = new Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    projectId: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    projectDetail: {
      type: String,
      required: true,
    },
    // projectImg: {
    //   type: Image,
    //   required: true,
    // },
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

const ProjectModel = model("Project", ProjectSchema);

export { ProjectModel };