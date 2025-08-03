import libroModel from '../model/libro.model.js';

const libroController = {
    getAllLibros: async (req, res) => {
        try {
            const libros = await libroModel.getAll();
            res.json(libros);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    getLibroById: async (req, res) => {
        try {
            const libro = await libroModel.getById(req.params.id);
            if (libro) {
                res.json(libro);
            } else {
                res.status(404).send('Libro no encontrado');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    createLibro: async (req, res) => {
        try {
            const nuevoLibro = await libroModel.create(req.body);
            res.status(201).json(nuevoLibro);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    updateLibro: async (req, res) => {
        try {
            const libroActualizado = await libroModel.update(req.params.id, req.body);
            if (libroActualizado) {
                res.send('Libro actualizado exitosamente');
            } else {
                res.status(404).send('Libro no encontrado');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    updateLibroExistencia: async (req, res) => {
        try {
            const { existencia } = req.body;
            const libroActualizado = await libroModel.updateExistencia(req.params.id, existencia);
            if (libroActualizado) {
                res.send('Existencia del libro actualizada');
            } else {
                res.status(404).send('Libro no encontrado');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    deleteLibro: async (req, res) => {
        try {
            const eliminado = await libroModel.remove(req.params.id);
            if (eliminado) {
                res.send('Libro eliminado exitosamente');
            } else {
                res.status(404).send('Libro no encontrado');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    getLibrosDisponibles: async (req, res) => {
        try {
            const libros = await libroModel.getDisponibles();
            res.json(libros);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

export default libroController;