const express = require('express')
const router = express.Router()
const ArticuloSchema = require('../models/product')

//Ruta para obtener todos los artículos
router.get('/articulos', async (req, res) => {
    try {
        let articulos = await ArticuloSchema.find()
        res.json(articulos)

    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Error al recuperar todos los artículos' })
    }
});

//Ruta para crear un articulo
router.post('/articulos', async (req, res) => {
    let articulo = ArticuloSchema({
        Nombre_producto: req.body.Nombre_producto,
        Cantidad: req.body.Cantidad,
        Precio: req.body.Precio
    });

    //Guardo el articulo en la BD.
    articulo.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        res.send({"status" : "error", "mensaje" :err.mensaje})
    })
})


//Ruta para eliminar un articulo
router.delete('/articulos/:id', (req, res) => {
    var id = req.params.id;

    ArticuloSchema.deleteOne({_id: id}).then(() => {
        res.json({"status": "OK", "mensaje": "Articulo borrado"})
    }).catch((error) => {
        console.log(error)
        res.json({"status": "NO OK", "mensaje": "Error al eliminar un articulo"})
    })
})

module.exports = router