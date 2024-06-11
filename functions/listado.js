const pool = require('../db_config.js');

async function listado(){

    let client;

    try {
        
        client = await pool.connect();
        const resultado = await client.query(`SELECT id, titulo, artista, tono FROM canciones;`)
        return resultado.rows;
        
    } catch (error) {

        console.log(`X Error al conectarse a la base de datos :`, error);        

    }finally{

        client.release();

    }
}

module.exports = listado;