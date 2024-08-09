const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    /*DESCOMENTAR O SSL ABAIXO AO SUBIR PARA PRODUÇÃO*/
    /*
        ssl: {
            rejectUnauthorized: false,
        },
    */
});

pool.on('connect', () => {
    console.log('Base de dados conectada.');
});

pool.on('error', (err) => {
    console.error('Erro na base de dados:', err);
});

module.exports = pool;
