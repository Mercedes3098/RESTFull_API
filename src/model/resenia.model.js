import { pool } from '../config/db.js';

let reseniasDB = [];

const reseniaModel = {
    getAll: async () => {
        return reseniasDB;
    },
    getById: async (id) => {
        return reseniasDB.find(r => r.id === id);
    },
    getByLibro: async (id_libro) => {
        return reseniasDB.filter(r => r.id_libro === id_libro);
    },
    create: async (nuevaResenia) => {
        const reviewWithId = { id: Date.now().toString(), ...nuevaResenia };
        reseniasDB.push(reviewWithId);
        return reviewWithId;
    },
    update: async (id, datosActualizados) => {
        const index = reseniasDB.findIndex(r => r.id === id);
        if (index !== -1) {
            reseniasDB[index] = { ...reseniasDB[index], ...datosActualizados };
            return reseniasDB[index];
        }
        return null;
    },
    remove: async (id) => {
        const initialLength = reseniasDB.length;
        reseniasDB = reseniasDB.filter(r => r.id !== id);
        return reseniasDB.length < initialLength;
    }
};

export default reseniaModel;