const {
  getAlias,
  getAllUrls,
  createAlias,
} = require("../controller/urlController");
const router = require("express").Router();

router.get("/", getAllUrls);
router.get("/:alias", getAlias);
router.post("/insert", createAlias);
module.exports = router;
