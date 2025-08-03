import express from 'express';
import usuarioRoutes from './src/routes/usuario.routes.js';
import libroRoutes from './src/routes/libro.routes.js';
import prestamoRoutes from './src/routes/prestamo.routes.js';
import reseniaRoutes from './src/routes/resenia.routes.js';

const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/libros', libroRoutes);
app.use('/prestamos', prestamoRoutes);
app.use('/resenias', reseniaRoutes);

app.get('/', (req, res) => {
    res.send('API RESTful de la Biblioteca en funcionamiento. Accede a /usuarios, /libros, /prestamos, /resenias.');
});

app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});