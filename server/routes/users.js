import express from "express";
import {
  update,
  deleteAnUser,
  getAnUser,
  SubscribeAnUser,
  unSubscribeAnUser,
  like,
  dislike,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//updateAnUser
router.put("/:id",verifyToken, update);
//deleteAnUser
router.delete("/:id",verifyToken, deleteAnUser);
//getAnUser
router.get("/find/:id",verifyToken, getAnUser);

//SubscribeAnUser
router.put("/sub/:id",verifyToken, SubscribeAnUser);
//unSubscribeAnUser
router.put("/unsub/:id",verifyToken, unSubscribeAnUser);
//likeAVideo
router.put("/like/:videoId",verifyToken, like);
//disLikeAVideo
router.put("/dislike/:videoId",verifyToken, dislike);
export default router;
