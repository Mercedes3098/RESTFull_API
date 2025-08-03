import { pool } from '../config/db.js';

let usuariosDB = [];

const usuarioModel = {
    getAll: async () => {
        return usuariosDB;
    },
    getById: async (id) => {
        return usuariosDB.find(u => u.id === id);
    },
    create: async (nuevoUsuario) => {
        const userWithId = { id: Date.now().toString(), ...nuevoUsuario };
        usuariosDB.push(userWithId);
        return userWithId;
    },
    update: async (id, datosActualizados) => {
        const index = usuariosDB.findIndex(u => u.id === id);
        if (index !== -1) {
            usuariosDB[index] = { ...usuariosDB[index], ...datosActualizados };
            return usuariosDB[index];
        }
        return null;
    },
    remove: async (id) => {
        const initialLength = usuariosDB.length;
        usuariosDB = usuariosDB.filter(u => u.id !== id);
        return usuariosDB.length < initialLength;
    }
};

export default usuarioModel;