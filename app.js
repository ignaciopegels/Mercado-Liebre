const express = require("express")
const path = require ("path")

const app = express();

const publicPath = path.resolve(__dirname, "/.public")
app.use(express.static(publicPath)) // el objetivo de esta linea es decirle a express que es un recurso de archivos estaticos  que lo podemos consumir de forma sencilla.

app.listen(3000, ()=> {
    console.log ("Servidor corriendo en el puerto 3000")
})