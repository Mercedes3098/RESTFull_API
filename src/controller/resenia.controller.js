import reseniaModel from '../model/resenia.model.js';

const reseniaController = {
    getAllResenias: async (req, res) => {
        try {
            const resenias = await reseniaModel.getAll();
            res.json(resenias);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    getReseniaById: async (req, res) => {
        try {
            const resenia = await reseniaModel.getById(req.params.id);
            if (resenia) {
                res.json(resenia);
            } else {
                res.status(404).send('Reseña no encontrada');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    getReseniasByLibro: async (req, res) => {
        try {
            const resenias = await reseniaModel.getByLibro(req.params.id_libro);
            res.json(resenias);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    createResenia: async (req, res) => {
        try {
            const nuevaResenia = await reseniaModel.create(req.body);
            res.status(201).json(nuevaResenia);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    updateResenia: async (req, res) => {
        try {
            const reseniaActualizada = await reseniaModel.update(req.params.id, req.body);
            if (reseniaActualizada) {
                res.send('Reseña actualizada exitosamente');
            } else {
                res.status(404).send('Reseña no encontrada');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    deleteResenia: async (req, res) => {
        try {
            const eliminado = await reseniaModel.remove(req.params.id);
            if (eliminado) {
                res.send('Reseña eliminada exitosamente');
            } else {
                res.status(404).send('Reseña no encontrada');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

export default reseniaController;