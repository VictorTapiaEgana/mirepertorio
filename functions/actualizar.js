const pool = require('../db_config.js');

async function actualizar(tituloOriginal, artistaOriginal, tonoOriginal, Nombre, Artista ,Tono){
    
    let client;

    try {

        client = await pool.connect()
        const consulta = `UPDATE canciones SET titulo = $4, artista = $5, tono = $6
                          WHERE titulo = $1 AND artista = $2 AND tono = $3;`;

        const variables= [tituloOriginal, artistaOriginal, tonoOriginal, Nombre, Artista ,Tono];

        const resultado = await client.query(consulta, variables); 


        
    } catch (error) {

        console.log(`X error al conectarse a la base de datos :`, error);
        
    }finally{

        client.release();

    }

};

module.exports = actualizar;