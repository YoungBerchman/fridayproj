import { Application } from "express";
import user from "./router/userRouter";

export const mainApp = async (app: Application) => {
  try {
    app.use("/api", user);
  } catch (error) {
    return error;
  }
};
