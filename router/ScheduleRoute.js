const { Router } = require("express");
const router = Router();
const scheduleController = require("../controller/ScheduleController");

//get, post, put, delete

router.get("/address", scheduleController.buscar);

router.post("/address", scheduleController.criar)

router.put("/address/:id", scheduleController.alterar)

router.delete("/address/:id", scheduleController.apagar)

router.delete("/addressTudo", scheduleController.apagarTudo)

module.exports = router;