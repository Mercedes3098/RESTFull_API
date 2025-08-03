import { pool } from '../config/db.js';

let librosDB = [];

const libroModel = {
    getAll: async () => {
        return librosDB;
    },
    getById: async (id) => {
        return librosDB.find(l => l.id === id);
    },
    create: async (nuevoLibro) => {
        const bookWithId = { id: Date.now().toString(), ...nuevoLibro };
        librosDB.push(bookWithId);
        return bookWithId;
    },
    update: async (id, datosActualizados) => {
        const index = librosDB.findIndex(l => l.id === id);
        if (index !== -1) {
            librosDB[index] = { ...librosDB[index], ...datosActualizados };
            return librosDB[index];
        }
        return null;
    },
    updateExistencia: async (id, existencia) => {
        const index = librosDB.findIndex(l => l.id === id);
        if (index !== -1) {
            librosDB[index].existencia = existencia;
            return librosDB[index];
        }
        return null;
    },
    remove: async (id) => {
        const initialLength = librosDB.length;
        librosDB = librosDB.filter(l => l.id !== id);
        return librosDB.length < initialLength;
    },
    getDisponibles: async () => {
        return librosDB.filter(libro => libro.existencia > 0);
    }
};

export default libroModel;