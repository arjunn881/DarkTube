import express from 'express';
import {  auth, googleSignIn, userSignIn, userSignUp } from '../controllers/auth.js';

const router = express.Router();

router.get("/",auth);
//createAnUser
router.post("/signup",userSignUp);
//UserSignIn
router.post("/signin",userSignIn);
//GoogleSignIn
router.post("/google",googleSignIn);

export default router;