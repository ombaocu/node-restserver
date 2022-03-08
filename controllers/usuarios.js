const { response } = require('express');




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

const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.status(403).json({
        msg: 'post API - controlador',
        body: body
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