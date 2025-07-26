const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Obteniendo todas las reseñas' });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Obteniendo reseña con ID: ${id}` });
});

router.get('/libro/:id_libro', (req, res) => {
    const { id_libro } = req.params;
    res.json({ message: `Obteniendo reseñas del libro con ID: ${id_libro}` });
});

router.post('/', (req, res) => {
    const data = req.body;
    res.status(201).json({ message: 'Creando nueva reseña', data });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const data = req.body;
    res.json({ message: `Actualizando reseña existente con ID: ${id}`, data });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Eliminando reseña con ID: ${id}` });
});

module.exports = router;