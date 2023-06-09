const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.post("/getTasks", taskController.getTasks);

router.post("/getTask", taskController.getTask);

router.post("/postTask", taskController.postTask);

router.put("/putTask", taskController.putTask);

router.delete("/delTask", taskController.delTask);

module.exports = router;
