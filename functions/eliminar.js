const pool = require('../db_config.js');

async function eliminar(id){

    let client;

    try {
        client = await pool.connect()    
        const consulta = `DELETE FROM canciones WHERE id = $1;`;
        const variables = [id];
        const resultado = await client.query(consulta,variables);
        return resultado;
        
    } catch (error) {

        console.log(`X Error al eliminar la canción :`,error);

    }finally{

        client.release();

    }
};

module.exports = eliminar;