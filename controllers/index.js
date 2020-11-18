const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./htmlController");
const authRoutes = require("./authController");

// Auth Routes
//router.use("/auth", authRoutes);
router.use("/auth", function (req, res) {
    authRoutes.all(function (data) {
        const hbsObject = {
            authRoutes: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// API Routes
//router.use("/api", apiRoutes);
router.use("/api", function (req, res) {
    apiRoutes.all(function (data) {
        const hbsObject = {
            apiRoutes: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// HTML Routes
//router.use("/", htmlRoutes);
router.use("/", function (req, res) {
    htmlRoutes.all(function (data) {
        const hbsObject = {
            htmlRoutes: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

module.exports = router;
