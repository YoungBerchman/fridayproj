import { model, Schema, Document } from "mongoose";

interface iProps {
  name: string;
  email: string;
  password: string;
  avatar: string;
  avatarID: string;
  isVerified: boolean;
  verifiedToken: string;
}

interface iPropsData extends iProps, Document {}

const userModel = new Schema<iPropsData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    verifiedToken: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export default model<iPropsData>("user", userModel);
