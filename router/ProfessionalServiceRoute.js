const { Router } = require("express");
const router = Router();
const professionalServiceController = require("../controller/ProfessionalServiceController");

//get, post, put, delete

router.get("/professionalService", professionalServiceController.buscar);

router.post("/professionalService", professionalServiceController.criar)

router.put("/professionalService/:id", professionalServiceController.alterar)

router.delete("/professionalService/:id", professionalServiceController.apagar)

router.delete("/professionalServiceTudo", professionalServiceController.apagarTudo)

module.exports = router;