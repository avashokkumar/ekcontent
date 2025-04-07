const router = require("express").Router();
const {getData, getInstafeeds} = require("../controller/controller");

 router.get(
    "/getData",
    getData
  );
  router.get(
    "/getInstafeeds",
    getInstafeeds
  );
module.exports = router;  