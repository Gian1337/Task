const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const artRoutes = require('./routes/ArticulosRoutes')
const ArticuloModel = require('./models/product')
const cors = require('cors');
/*
app.use(cors({
    origin: 'http://localhost:3000'
}));
*/
const app = express()

//Middlewares
app.use(express.urlencoded({extended: true}))
/*Express.urlencoded: Funcionalidad para almacenar datos a través de key:value y no JSON. */
app.use(express.json())

//Routes
app.use('/articulos', artRoutes)

/*
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"));
})
¨/
/*TODO: Sobreescribir métodos en el Route para ordenar el Index */
//Método Get para obtener todos los articulos
app.get('/articulos', async (req, res) => {
    try {
        const articulos = await ArticuloModel.find(req.body)
        res.status(200).json(articulos)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

})

//Método post para crear articulos
app.post('/articulos', async (req, res) => {
    try {
        const articulo = await ArticuloModel.create(req.body)
        res.status(200).json(articulo)
    } catch (error) {
        res.status(500).json({message: error.message})
    }

})

//Método delete para eliminar articulos
app.delete('/articulos/:id', async (req, res) => {
    try {
        const {id} = req.params
        const articulo = await ArticuloModel.findByIdAndDelete(id)

        if( !articulo ) return res.status(400).json({ message: 'El artículo no existe'})
        else res.status(200).json({message: "Articulo borrado!"})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }

})


//Conexión a la BD
/*Según buenas prácticas, es conveniente primero conectarse a la BD y luego, inicializar el servidor. */
mongoose.connect('mongodb://localhost:27017/Supermercado')
    .then(() => {
        console.log("Conexión a la BD exitosa");
        //Inicialización del server
    app.listen(3000, ()=>{
        console.log(`Server funcionando correctamente en puerto: `, 3000)
    })
    })
    .catch((error) => {
        console.error("Error al conectar a la BD:", error);
        
    });





    //TODO: AGREGAR README
