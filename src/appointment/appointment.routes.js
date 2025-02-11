import { Router } from "express";
import { getAppointments, saveAppointment, actualizarCita, cancelarCitas} from "./appointment.controller.js";
import { createAppointmentValidator, updateAppointmentValidator, deleteAppointmentValidator  } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get("/:uid", getAppointments);
router.patch("/actualizarCita/:uid", updateAppointmentValidator , actualizarCita)
router.delete("/cancelarCita/:uid", deleteAppointmentValidator,cancelarCitas)

export default router;