const router = require("express").Router();
// Import our controllers
const postRoutes = require("./postsController");
const userRoutes = require("./usersController");
const commentRoutes = require ("./commentsController");
const tagsRoutes = require ("./tagsController");
// Hook up to the router
router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);
router.use("/tags", tagsRoutes);
// Export the router
module.exports = router;
