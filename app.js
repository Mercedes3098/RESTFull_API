import express from 'express';
const app = express();
app.use(express.json());

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});

// --- USUARIOS ---
app.get('/usuarios', (req, res) => {
    res.send('Obtener todos los usuarios');
});

app.get('/usuarios/:id', (req, res) => {
    res.send(`Obtener un usuario por su id: ${req.params.id}`);
});

app.post('/usuarios', (req, res) => {
    res.send('Crear un nuevo usuario');
});

app.put('/usuarios/:id', (req, res) => {
    res.send(`Actualizar los datos del usuario con id: ${req.params.id}`);
});

app.delete('/usuarios/:id', (req, res) => {
    res.send(`Eliminar el usuario con id: ${req.params.id}`);
});

// --- LIBROS ---
app.get('/libros', (req, res) => {
    res.send('Obtener todos los libros');
});

app.get('/libros/:id', (req, res) => {
    res.send(`Obtener un libro por su id: ${req.params.id}`);
});

app.post('/libros', (req, res) => {
    res.send('Crear un nuevo libro');
});

app.put('/libros/:id', (req, res) => {
    res.send(`Actualizar los datos del libro con id: ${req.params.id}`);
});

app.put('/libros/:id/existencia', (req, res) => {
    res.send(`Actualizar la existencia del libro con id: ${req.params.id}`);
});

app.delete('/libros/:id', (req, res) => {
    res.send(`Eliminar el libro con id: ${req.params.id}`);
});

// --- PRESTAMOS ---
app.get('/prestamos', (req, res) => {
    res.send('Obtener todos los préstamos');
});

app.get('/prestamos/:id', (req, res) => {
    res.send(`Obtener un préstamo por su id: ${req.params.id}`);
});

app.post('/prestamos', (req, res) => {
    res.send('Crear un nuevo préstamo');
});

app.put('/prestamos/:id', (req, res) => {
    res.send(`Actualizar los datos del préstamo con id: ${req.params.id}`);
});

app.delete('/prestamos/:id', (req, res) => {
    res.send(`Eliminar el préstamo con id: ${req.params.id}`);
});

// --- RESEÑAS ---
app.get('/resenias', (req, res) => {
    res.send('Obtener todas las reseñas');
});

app.get('/resenias/:id', (req, res) => {
    res.send(`Obtener una reseña por su id: ${req.params.id}`);
});

app.get('/resenias/libro/:id_libro', (req, res) => {
    res.send(`Obtener reseñas del libro con id: ${req.params.id_libro}`);
});

app.post('/resenias', (req, res) => {
    res.send('Crear una nueva reseña');
});

app.put('/resenias/:id', (req, res) => {
    res.send(`Actualizar la reseña con id: ${req.params.id}`);
});

app.delete('/resenias/:id', (req, res) => {
    res.send(`Eliminar la reseña con id: ${req.params.id}`);
});

// Lógicas específicas
app.get('/libros/disponibles', (req, res) => {
    res.send('Obtener todos los libros con existencia disponible para préstamos');
});

app.get('/prestamos/usuario/:id_usuario', (req, res) => {
    res.send(`Obtener todos los préstamos del usuario con id: ${req.params.id_usuario}`);
});

app.get('/prestamos/libro/:id_libro', (req, res) => {
    res.send(`Obtener todos los préstamos realizados para el libro con id: ${req.params.id_libro}`);
});