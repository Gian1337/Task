const mongoose = require('mongoose')

//Definición de Schema

// Esquema
const articuloSchema = new mongoose.Schema({
    Nombre_producto: {
      type: String,
      required: true,
      validate: {
        validator: function(Nombre_producto) {
          // Regex para validar solo letras minusculas y espacios.
          return /^[a-z\s]+$/.test(Nombre_producto);
        },
        message: props => `${props.value} no es un nombre de producto válido!`
    }
    },
    Cantidad: {
      type: Number,
      required: true,
      min: 1,
    },
    Precio: {
      type: Number,
      required: true, 
      default: 0.0,
    },
  });
  
  
  
  // Creacion y exportación del modelo
  module.exports = mongoose.model('Articulo', articuloSchema)
  