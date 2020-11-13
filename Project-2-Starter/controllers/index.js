const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./htmlController");
const authRoutes = require("./authController");

// Auth Routes
router.use("/auth", authRoutes);

// API Routes
router.use("/api", apiRoutes);

// HTML Routes
router.use("/", htmlRoutes);

module.exports = router;
