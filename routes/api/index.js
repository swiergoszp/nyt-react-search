const router = require("express").Router();
const articleRoutes = require("./aritcles");

router.use("/saved", articleRoutes);

module.exports = router;
