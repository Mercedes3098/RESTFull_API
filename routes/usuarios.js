const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Obteniendo todos los usuarios' });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Obteniendo usuario con ID: ${id}` });
});

router.post('/', (req, res) => {
    const data = req.body;
    res.status(201).json({ message: 'Creando nuevo usuario', data });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const data = req.body;
    res.json({ message: `Actualizando los datos del usuario con ID: ${id}`, data });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Eliminando usuario con ID: ${id}` });
});

module.exports = router;