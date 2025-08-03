import express from 'express';
import reseniaController from '../controller/resenia.controller.js';

const router = express.Router();

router.get('/', reseniaController.getAllResenias);
router.get('/:id', reseniaController.getReseniaById);
router.get('/libro/:id_libro', reseniaController.getReseniasByLibro);
router.post('/', reseniaController.createResenia);
router.put('/:id', reseniaController.updateResenia);
router.delete('/:id', reseniaController.deleteResenia);

export default router;