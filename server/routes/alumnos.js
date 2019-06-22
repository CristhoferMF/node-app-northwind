const express= require("express");
const router=express.Router();
const connection = require("../db");

/* http://localhost:3000/api/employees/ */
router.get("/",function(req,res){
    connection.query("SELECT * FROM employees ",function(err,results,fields){
        if(err){
            res.send({error:err.message})
        }
        res.send(results)
    });
})
/* http://localhost:3000/api/employees/1 */
router.get("/:id",function(req,res){
    connection.query("SELECT * FROM employees WHERE EmployeeID=? ",[req.params.id],function(err,results,fields){
        if(err){
            res.send({error:err.message})
        }
        res.send(results)
    });
})
/* http://localhost:3000/api/employees/1 */
router.delete("/:id",function(req,res){
    connection.query("DELETE FROM employees WHERE EmployeeID=? ",[req.params.id],function(err,results,fields){
        if(err){
            res.send({error:err.message})
        }
        res.send(results)
    });
})
module.exports = router;