const express= require("express");
const router=express.Router();
const connection = require("../db");
const ShipperController = require('../controller/shipper.ctrl');

/* http://localhost:3000/api/shippers/ */
router.get("/",ShipperController.listarShippers);
/* http://localhost:3000/api/shippers/1 */
router.get("/:id",ShipperController.buscarShippers)
/* http://localhost:3000/api/shippers/ */
router.post("/",ShipperController.insertarShippers);
/* */
router.put("/",ShipperController.editarShippers);
/* http://localhost:3000/api/shippers/ */
router.delete("/:id",ShipperController.borrarShippers);


module.exports = router;