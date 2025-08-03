import express from 'express';
import libroController from '../controller/libro.controller.js';

const router = express.Router();

router.get('/', libroController.getAllLibros);
router.get('/:id', libroController.getLibroById);
router.post('/', libroController.createLibro);
router.put('/:id', libroController.updateLibro);
router.put('/:id/existencia', libroController.updateLibroExistencia);
router.delete('/:id', libroController.deleteLibro);

router.get('/disponibles', libroController.getLibrosDisponibles);

export default router;