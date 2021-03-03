const router = require("express").Router();
const controller = require("../controllers/questionsController");
const auth = require("../config/middleware/auth");

router.route("/")
  .get(controller.findAll)
  .post(controller.create, auth);

router.route("/:topic")
  .get(controller.findByTopic);

router
  .route("/:id")
  .get(controller.findById, auth)
  .put(controller.update)
  .delete(controller.remove, auth);

module.exports = router;
