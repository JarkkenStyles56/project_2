const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./htmlController");
const authRoutes = require("./authController");

// Auth Routes
router.use("/auth", authRoutes);

// API Routes
router.use("/api", apiRoutes);

// HTML Routes
//router.use("/", htmlRoutes);
router.use("/", function(req, res) {
    htmlRoutes.all(function(data) {
      const hbsObject = {
        htmlRoutes: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

module.exports = router;
