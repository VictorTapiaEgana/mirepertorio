const listado = require('./functions/listado.js');
const insertar = require('./functions/insertar.js');
const eliminar = require('./functions/eliminar.js');
const actualizar = require('./functions/actualizar.js');

const express = require('express');
const path = require('path');

PORT = process.env.SERVER_PORT || 3001;

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/public',express.static(path.join(process.cwd(),'/public')));
app.use('/css', express.static(path.join(process.cwd(),'/node_modules/bootstrap/dist/css')));
app.use('/cssJs',express.static(path.join(process.cwd(),'/node_modules/bootstrap/dist/js')));

app.get('/',(req,res)=>{
     res.sendFile(path.join(process.cwd(),'/pages/index.html'))
});

app.get('/canciones',async (req,res)=>{

    try {

        const canciones = await listado();
        res.json(canciones);

    } catch (error) {

        console.log(`X Error al conectarse a la base de datos ;` , error);

    }    

});

app.post('/cancion',async (req,res)=>{
    
    const { nombreCancion, nombreArtista, nombreTono } = req.body;    

     try {
        const resultado = await insertar( nombreCancion,nombreArtista,nombreTono);       
        
     } catch (error) {
        console.log(`X Error el agregra la cancion`, error);
     };

     res.redirect('/')
});

app.delete('/cancion/:id',async (req,res)=>{
    
    const { id } = req.params;
    
     try {
    
        const resultado = await eliminar(id);
        // console.log(`resultado delete:`, resultado)
        res.status(200);

     } catch (error) {

          console.log(`X Error el Eliminar la cancion`, error);          

     }   
     
});

app.put('/cancion', async (req,res)=>{

     const { tituloOriginal, artistaOriginal, tonoOriginal, Nombre, Artista ,Tono } = req.body;    

    try {

        const resultado = await actualizar(tituloOriginal, artistaOriginal, tonoOriginal, Nombre, Artista ,Tono);
        res.status(200);

    } catch (error) {
        
        console.log(`X Error el Eliminar la cancion`, error);

    }

});

app.listen(PORT,()=>{
    console.clear();
    console.log(`Holiwis en PORT ${PORT}`);
});