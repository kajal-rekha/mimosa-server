import mongoose, { Schema, model } from "mongoose";
import { specialistType } from "../types/specialist.type";

const specilistSchema = new Schema<specialistType>(
  {
    name: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    beautyPackages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BeautyPackages",
      },
    ],
  },
  {
    timestamps: true,
  },
);

const SpecilistModel = model<specialistType>("Specilist", specilistSchema);
export default SpecilistModel;
