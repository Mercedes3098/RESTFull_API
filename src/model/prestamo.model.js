import { pool } from '../config/db.js';

let prestamosDB = [];

const prestamoModel = {
    getAll: async () => {
        return prestamosDB;
    },
    getById: async (id) => {
        return prestamosDB.find(p => p.id === id);
    },
    create: async (nuevoPrestamo) => {
        const loanWithId = { id: Date.now().toString(), ...nuevoPrestamo };
        prestamosDB.push(loanWithId);
        return loanWithId;
    },
    update: async (id, datosActualizados) => {
        const index = prestamosDB.findIndex(p => p.id === id);
        if (index !== -1) {
            prestamosDB[index] = { ...prestamosDB[index], ...datosActualizados };
            return prestamosDB[index];
        }
        return null;
    },
    remove: async (id) => {
        const initialLength = prestamosDB.length;
        prestamosDB = prestamosDB.filter(p => p.id !== id);
        return prestamosDB.length < initialLength;
    },
    getByUsuario: async (id_usuario) => {
        return prestamosDB.filter(p => p.id_usuario === id_usuario);
    },
    getByLibro: async (id_libro) => {
        return prestamosDB.filter(p => p.id_libro === id_libro);
    }
};

export default prestamoModel;