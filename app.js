const express = require('express');
const app = express();
const PORT = 8080;

const usuariosRoutes = require('./routes/usuarios');
const librosRoutes = require('./routes/libros');
const prestamosRoutes = require('./routes/prestamos');
const reseniasRoutes = require('./routes/resenias');

app.use(express.json());

app.use('/usuarios', usuariosRoutes);
app.use('/libros', librosRoutes);
app.use('/prestamos', prestamosRoutes);
app.use('/resenias', reseniasRoutes);

app.get('/', (req, res) => {
    res.send('¡API RESTful de Biblioteca funcionando correctamente!');
});

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});