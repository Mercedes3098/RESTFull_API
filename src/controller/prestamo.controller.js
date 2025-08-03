import prestamoModel from '../model/prestamo.model.js';

const prestamoController = {
    getAllPrestamos: async (req, res) => {
        try {
            const prestamos = await prestamoModel.getAll();
            res.json(prestamos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    getPrestamoById: async (req, res) => {
        try {
            const prestamo = await prestamoModel.getById(req.params.id);
            if (prestamo) {
                res.json(prestamo);
            } else {
                res.status(404).send('Préstamo no encontrado');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    createPrestamo: async (req, res) => {
        try {
            const nuevoPrestamo = await prestamoModel.create(req.body);
            res.status(201).json(nuevoPrestamo);
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    },
    updatePrestamo: async (req, res) => {
        try {
            const prestamoActualizado = await prestamoModel.update(req.params.id, req.body);
            if (prestamoActualizado) {
                res.send('Préstamo actualizado exitosamente');
            } else {
                res.status(404).send('Préstamo no encontrado');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    deletePrestamo: async (req, res) => {
        try {
            const eliminado = await prestamoModel.remove(req.params.id);
            if (eliminado) {
                res.send('Préstamo eliminado exitosamente');
            } else {
                res.status(404).send('Préstamo no encontrado');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    getPrestamosByUsuario: async (req, res) => {
        try {
            const prestamos = await prestamoModel.getByUsuario(req.params.id_usuario);
            res.json(prestamos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    getPrestamosByLibro: async (req, res) => {
        try {
            const prestamos = await prestamoModel.getByLibro(req.params.id_libro);
            res.json(prestamos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

export default prestamoController;