import { Router } from "express";
import {
  changeAccountPassword,
  createAccount,
  forgetAccountPassword,
  loginAccount,
  readAllAccount,
  readOneAccount,
  verifyAccount,
  verifyEmail,
} from "../controller/userController";

const router: any = Router();

router.route("/register").post(createAccount);
router.route("/login").post(loginAccount);
router.route("/verify-account/:userID").patch(verifyAccount);
router.route("/verify-email/:userID").patch(verifyEmail);
router.route("/forget-account-password").patch(forgetAccountPassword);
router.route("/reset-account-password/userID").patch(changeAccountPassword);

router.route("/get-one-user/:userID").get(readOneAccount);
router.route("/get-user").get(readAllAccount);

export default router;
