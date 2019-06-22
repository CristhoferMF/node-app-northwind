const connection = require("../db");

module.exports= {
    "listarShippers": (req,res)=>{
        connection.query("SELECT * FROM shippers ",function(err,results,fields){
            if(err){
                res.status(500).json({error:err.message})
            }
            res.json(results)
        });
    },
    "buscarShippers":(req,res)=>{
        connection.query("SELECT * FROM shippers WHERE ShipperID=? ",[req.params.id],function(err,results,fields){
            if(err){
                res.status(500).json({error:err.message})
            }
            res.json(results)
        });
    },
    "insertarShippers":(req,res)=>{
        console.log("DATOS >>>>> ",req.body)
        
    const {company,phone} = req.body;
    
    connection.query("INSERT INTO shippers VALUES(NULL,?,?) ",[company,phone],function(err,results,fields){
        if(err) res.status(500).json({error:err.message});

        res.json({
            res:true,
            msg:"Inserción exitosa"
        })
    });
    },
    "editarShippers":(req,res)=>{
        const {company,phone,id} = req.body;
    
    connection.query("UPDATE shippers SET CompanyName=?,Phone=? WHERE ShipperID=?",[company,phone,id],function(err,results,fields){
        if(err){
            res.status(500).json({error:err.message})
        }
        if(results.changedRows){
            res.json({
                res:true,
                msg:"Se actualizó correctamente"
            })
        }else{
            res.json({
                res:false,
                msg:"No se pudo actualizar"
            })
        }
    });
    },
    "borrarShippers":(req,res)=>{
        const {id} = req.params;
    
    connection.query("DELETE FROM shippers WHERE ShipperID=? ",[id],function(err,results,fields){
        if(err){
            res.status(500).json({error:err.message})
        }

        if(results.affectedRows){
            res.json({
                res:true,
                msg:"Se elimino correctamente"
            })
        }else{
            res.json({
                res:false,
                msg:"No se pudo eliminar"
            })
        }
        
    });
    }
}