const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Obteniendo todos los libros' });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Obteniendo libro con ID: ${id}` });
});

router.post('/', (req, res) => {
    const data = req.body;
    res.status(201).json({ message: 'Creando nuevo libro', data });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const data = req.body;
    res.json({ message: `Actualizando los datos del libro con ID: ${id}`, data });
});

router.put('/:id/existencia', (req, res) => {
    const { id } = req.params;
    const { cantidad } = req.body;
    res.json({ message: `Actualizando existencia del libro con ID: ${id} a: ${cantidad}` });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Eliminando libro con ID: ${id}` });
});

router.get('/disponibles', (req, res) => {
    res.json({ message: 'Obteniendo todos los libros con existencia disponible para préstamos' });
});

module.exports = router;