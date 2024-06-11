const pool = require('../db_config.js');

async function insertar(titulo, artista, tono){

    let client;

    try {

        client = await pool.connect();
        const consulta = `INSERT INTO canciones ( titulo, artista, tono) VALUES( $1, $2, $3);`;
        const variables =[ titulo, artista, tono];
        const resultado = await client.query(consulta,variables);        
        
    } catch (error) {

        console.log(`X Error de conexion a la base de datos :`, error);
        
    }finally{

        client.release();
    }
};

module.exports = insertar;