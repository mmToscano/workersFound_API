const { Router } = require("express");
const router = Router();
const servicesController = require("../controller/ServiceController");

//get, post, put, delete

router.get("/service", servicesController.buscar);

router.post("/service", servicesController.criar)

router.put("/service/:id", servicesController.alterar)

router.delete("/service/:id", servicesController.apagar)

router.delete("/serviceTudo", servicesController.apagarTudo)

module.exports = router;