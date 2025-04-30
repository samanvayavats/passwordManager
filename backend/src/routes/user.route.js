import { Router } from "express";
import {userEntry,clearEntry} from "../controllers/user.controller.js"
const router = Router()

router.route("/user-entry").post(userEntry)
router.route("/delete-values").post(clearEntry)

export default router