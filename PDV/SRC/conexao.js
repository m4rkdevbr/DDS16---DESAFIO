require('dotenv').config();
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
    /*DESCOMENTAR O SSL ABAIXO AO SUBIR PARA PRODUÇÃO*/
    /*    ssl: {
          rejectUnauthorized: false,
          ca: fs.readFileSync(path.join(__dirname, 'ca.crt')).toString(),
        },
    */
  },
});

module.exports = knex;
