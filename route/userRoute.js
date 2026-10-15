import express from "express"
import {addUser,getUser,getSingleUser,deleteUSer, login} from "../controller/userDataController.js"
import authanticateToken from "../utils/authMiddleware.js"
import upload from '../utils/uploadMiddleware.js'
const router = express.Router()

router.post('/api/add-user',upload.single('image'),addUser)
router.get('/api/get-user',authanticateToken,getUser)
router.get('/api/get-singleuser/:uid',authanticateToken,getSingleUser)
router.delete('/api/delete-user/:uid',authanticateToken,deleteUSer)
router.post('/api/login',login)


export default router