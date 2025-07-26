const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Obteniendo todos los préstamos' });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Obteniendo préstamo con ID: ${id}` });
});

router.post('/', (req, res) => {
    const data = req.body;
    res.status(201).json({ message: 'Creando nuevo préstamo (reserva de un libro)', data });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const data = req.body;
    res.json({ message: `Actualizando los datos del préstamo con ID: ${id}`, data });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Eliminando préstamo con ID: ${id}` });
});

router.get('/usuario/:id_usuario', (req, res) => {
    const { id_usuario } = req.params;
    res.json({ message: `Obteniendo todos los préstamos del usuario con ID: ${id_usuario}` });
});

router.get('/libro/:id_libro', (req, res) => {
    const { id_libro } = req.params;
    res.json({ message: `Obteniendo todos los préstamos realizados para el libro con ID: ${id_libro}` });
});

module.exports = router;