const { response } = require('express');
const bcrypt = require('bcryptjs');


const Usuario = require('../models/usuario');



const usuariosGet = (req, res = response) => {
    
    const {q, apikey, page = 1, limit = 10} = req.query;

    res.status(403).json({
        msg: 'get API - controlador',
        query : {
            q: q,
            apikey: apikey,
            page: page,
            limit: limit
        }
    })
};

const usuariosPost = async (req, res = response) => {

    const {nombre, correo, clave, rol} = req.body;
    const usuario = new Usuario({nombre, correo, clave, rol});

    // TODO: verifiar si el correo existe


    // TODO: Encriptar la clave
    const salt = bcrypt.genSaltSync();

    usuario.clave = bcrypt.hashSync(usuario.clave, salt);

    //Guardar BD
    await usuario.save();

    res.status(403).json({
        msg: 'post API - controlador',
        usuario
    })
};

const usuariosPut = (req, res = response) => {
    const id = req.params.id;

    res.status(403).json({
        msg: 'put API - controlador',
        id: id
    })
};

const usuariosDelete = (req, res = response) => {

    res.status(403).json({
        msg: 'delete API - controlador'
    })
};

const usuariosPatch = (req, res = response) => {

    res.status(200).json({
        msg: 'patch API - controlador'
    })
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
}