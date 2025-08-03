import usuarioModel from '../model/usuario.model.js';

const usuarioController = {
    getAllUsuarios: async (req, res) => {
        try {
            const usuarios = await usuarioModel.getAll();
            res.json(usuarios);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    getUsuarioById: async (req, res) => {
        try {
            const usuario = await usuarioModel.getById(req.params.id);
            if (usuario) {
                res.json(usuario);
            } else {
                res.status(404).send('Usuario no encontrado');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    createUsuario: async (req, res) => {
        try {
            const nuevoUsuario = await usuarioModel.create(req.body);
            res.status(201).json(nuevoUsuario);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    updateUsuario: async (req, res) => {
        try {
            const usuarioActualizado = await usuarioModel.update(req.params.id, req.body);
            if (usuarioActualizado) {
                res.send('Usuario actualizado exitosamente');
            } else {
                res.status(404).send('Usuario no encontrado');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    deleteUsuario: async (req, res) => {
        try {
            const eliminado = await usuarioModel.remove(req.params.id);
            if (eliminado) {
                res.send('Usuario eliminado exitosamente');
            } else {
                res.status(404).send('Usuario no encontrado');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

export default usuarioController;