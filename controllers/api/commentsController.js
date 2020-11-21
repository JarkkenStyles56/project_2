const db = require("../../models");
const router = require("express").Router();

/**
 * Comment - Read All
 */
router.get("/", function (req, res) {
  db.Comment.findAll(req.query)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

/**
 * Comment - Read One
 */
router.get("/:id", function (req, res) {
  db.Comment.findByPk(req.params.id)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

/**
 * Comment - Create
 * Notice how we are also taking in the User Id! Important!
 */
router.post("/", function (req, res) {
  db.Comment.create({
    UserId: req.user.id,
    ...req.body,
  })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

/**
 * Comment - Update
 */
router.put("/:id", function (req, res) {
  db.Comment.update(req.body, { where: { id: req.params.id } })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

/**
 * Comment - Delete
 */
router.delete("/:id", function (req, res) {
  db.Comment.destroy({ where: { id: req.params.id } })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

// Defining methods for the booksController
module.exports = router;
