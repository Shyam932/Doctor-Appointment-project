const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvaibilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middleweres/authMiddleware");

//router object
const router = express.Router();

//routes
//login||POST
router.post("/login", loginController);

//register|| POST
router.post("/register", registerController);

//auth || POST
router.post("/getUserData", authMiddleware, authController);

//Apply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notification || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//Notification || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//Get All doctor
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookAppointmentController);

//booking availability
router.post("/booking-avaibility", authMiddleware, bookingAvaibilityController);

//Appointments Lists
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;
