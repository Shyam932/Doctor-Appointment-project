const express = require("express");
const authMiddleware = require("../middleweres/authMiddleware");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorCtrl");
const router = express.Router();

//post SINGLE DOC INFO
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//post update profile
router.post("/updateProfile", authMiddleware, updateProfileController);

//post get single doc info
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

//get Appointment
router.get(
  "/doctor-appointments",
  authMiddleware,
  doctorAppointmentsController
);
//post
router.post("/update-status", authMiddleware, updateStatusController);
module.exports = router;
