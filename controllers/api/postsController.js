const db = require("../../models");
const router = require("express").Router();

/**
 * Post - Read All
 */
router.get("/", function (req, res) {
  db.Post.findAll(req.query)
    .then((dbModel) => {
      res.json(dbModel);
      console.log(dbModel);
    })
    .catch((err) => res.status(422).json(err));
});

//returns the JSON of all articles, no reviews
router.get("/articles", function (req, res) {
  db.Post.findAll({
    where: {
      isArticle: 1,
    },
  }).then(function (articlesPost) {
    res.json(articlesPost);
  });
});

//returns the JSON of all articles, no reviews
router.get("/reviews", function (req, res) {
  db.Post.findAll({
    where: {
      isReview: 1,
    },
  }).then(function (reviewPost) {
    res.json(reviewPost);
  });
});

/**
 * Post - Read One
 */
router.get("/:id", function (req, res) {
  db.Post.findByPk(req.params.id)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

/**
 * Post - Create
 * Notice how we are also taking in the User Id! Important!
 */
router.post("/", function (req, res) {
  let truncatedData = req.body.body.substring(0, 500) + "...";
  console.log(req.body);
  db.Post.create({
    UserId: req.user.id,
    truncated: truncatedData,
    ...req.body,
  })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

/**
 * Post - Update
 */
router.put("/:id", function (req, res) {
  db.Post.update(req.body, { where: { id: req.params.id } })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

/**
 * Post - Delete
 */
router.delete("/:id", function (req, res) {
  db.Post.destroy({ where: { id: req.params.id } })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

// Defining methods for the booksController
module.exports = router;
