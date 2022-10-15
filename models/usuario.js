
const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    correo: {
        type: String,
        required: [true, 'El correo es necesario'],
        unique: true
    },
    clave: {
        type: String,
        required: [true, 'La clave es necesaria'],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: [true, 'La rol es necesario'],
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});
    
module.exports = model( 'Usuario', UsuarioSchema );