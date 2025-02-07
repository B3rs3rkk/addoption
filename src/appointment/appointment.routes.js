import { Router } from "express";
import { getAppointments, saveAppointment, updatedAppointments, getAppointments} from "./appointment.controller.js";
import { createAppointmentValidator, getAppointmentsValidator, updatedAppointmentsValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get("/:uid", getAppointments);
router.patch("/updateAppointments/:uid", updatedAppointmentsValidator, updatedAppointments)
export default router;