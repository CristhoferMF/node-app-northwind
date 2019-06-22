const express= require("express");
const app = express();
const routerAlumnos = require("./server/routes/alumnos");
const routerShippers= require("./server/routes/shippers");


app.set("port",3000)
/* Devolver Json */
app.use(express.json())
/* Usar ruta alumnos */
app.use("/api/employees/",routerAlumnos)
app.use("/api/shippers/",routerShippers)
app.use("/",express.static(__dirname + '/app/public'));

app.listen(app.get("port"))