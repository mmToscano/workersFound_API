const { Router } = require("express");
const router = Router();
const addresssController = require("../controller/AddressController");

//get, post, put, delete

router.get("/address", addresssController.buscar);

router.post("/address", addresssController.criar)

router.put("/address/:id", addresssController.alterar)

router.delete("/address/:id", addresssController.apagar)

router.delete("/addressTudo", addresssController.apagarTudo)

module.exports = router;