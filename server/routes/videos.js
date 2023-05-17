import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getVideo,
  random,
  sub,
  getByTag,
  search,
  trend,
  updateVideo,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//createAvideo
router.post("/", verifyToken, addVideo);

//updateAvideo
router.put("/:id", verifyToken, updateVideo);

//deleteAvideo
router.delete("/:id", verifyToken, deleteVideo);

//getAvideo
router.get("/find/:id",verifyToken, getVideo);

//ViewAVideo

router.put("/view/:id",addView);

//trendingVideo
router.get("/trend",trend);
  
//randomVideo
router.get("/random",random);

//sublist
router.get("/sub",verifyToken,sub);

//getTagsOfSubVideo
router.get('/tags', getByTag);

//SerchingVideo
router.get('/search', search);

export default router;
