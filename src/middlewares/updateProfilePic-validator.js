import {param} from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";
import {userExists} from "../helpers/db-validators.js";

export const updateProfilePictureValidator = [
    param("uid").isMongoId().withMessage("No es un id valido de mongo"),
    param("uid").custom(userExists),
    validarCampos,
    handleErrors
]