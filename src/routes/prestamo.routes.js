import express from 'express';
import prestamoController from '../controller/prestamo.controller.js';

const router = express.Router();

router.get('/', prestamoController.getAllPrestamos);
router.get('/:id', prestamoController.getPrestamoById);
router.post('/', prestamoController.createPrestamo);
router.put('/:id', prestamoController.updatePrestamo);
router.delete('/:id', prestamoController.deletePrestamo);

router.get('/usuario/:id_usuario', prestamoController.getPrestamosByUsuario);
router.get('/libro/:id_libro', prestamoController.getPrestamosByLibro);

export default router;