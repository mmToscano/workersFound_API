const { Router } = require("express");
const router = Router();
const professionalController = require("../controller/ProfessionalController");

//get, post, put, delete

router.get("/professional", professionalController.buscar);

router.post("/professional", professionalController.criar)

router.put("/professional/:id", professionalController.alterar)

router.delete("/professional/:id", professionalController.apagar)

router.delete("/professionalTudo", professionalController.apagarTudo)

module.exports = router;