const { Router } = require("express");
const router = Router();
const usersController = require("../controller/UserController");

//get, post, put, delete

router.get("/user", usersController.buscar);

router.post("/user", usersController.criar)

router.put("/user/:id", usersController.alterar)

router.delete("/user/:id", usersController.apagar)

router.delete("/userTudo", usersController.apagarTudo)

module.exports = router;