let express = require("express");
let router = express.Router();

router.route("/todo")
    .get()
    .post();

router.route("/:todo")
    .get()
    .patch()
    .delete()