import { Router } from "express"
import { getUserById, getUsers, deleteUser, updatePassword, updateUser,citasPorUsuario } from "./user.controller.js"
import { getUserByIdValidator, deleteUserValidator, updatePasswordValidator, updateUserValidator } from "../middlewares/user-validators.js"
import {uploadProfilePicture} from "../middlewares/multer-uploads.js"
import {updateProfilePictureValidator} from "../middlewares/updateProfilePic-validator.js"
import {updateProfilePicture} from "./user.controller.js"
import {deleteFileOnError}from "../middlewares/delete-file-on-error.js"
const router = Router()

router.get("/findUser/:uid", getUserByIdValidator, getUserById)

router.get("/", getUsers)

router.delete("/deleteUser/:uid", deleteUserValidator, deleteUser)

router.patch("/updatePassword/:uid", updatePasswordValidator, updatePassword)

router.put("/updateUser/:uid", updateUserValidator, updateUser)
router.get("/citasPorUsuario/:uid", citasPorUsuario);
router.patch("/updateProfilePicture/:uid", uploadProfilePicture.single("profilePicture"),
updateProfilePictureValidator, deleteFileOnError, updateProfilePicture)

export default router
