import { Schema, model } from "mongoose";

const ProjectSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    project: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: false,
      default: Date.now,
    },
    endDate: {
      type: Date,
      required: false,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const ProjectModel = model("Project", ProjectSchema);

export { ProjectModel };