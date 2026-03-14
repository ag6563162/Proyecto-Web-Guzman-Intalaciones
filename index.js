// Importa el framework Express para crear el servidor web 
const express = require('express');
//Importa body-parser para procesar datos de formulario (POST)
const bodyParser = require('body-parser');
//importa el driver msnodesqlv8 para conectarse a SQL server
const sql = require('msnodesqlv8');
//Importa el modulo path para manejar rutas de archivos y directorios
const path = require('path');
//Crea una instacia de la aplicacion Express
const app = express()
//Define el puerto en el que se ejecutara el servidor 
const port = 3000
//Para usar los archivos html
app.use(express.json());

app.use(express.static('public'));

//define la carpeta de archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
//Habilita el procesamiento de datos de formulario (aplication/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({extended: true }))
//Cadena de conexion para acceder a la base de datos SQL server
const connectionString = "Server=localhost;Database=Proyecto_Web_Guzman_Intalaciones;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server};" 
//Maneja las solicitudes GET a la ruta raiz "/"
app.get('/cliente', (req, res) => {
    const query = "SELECT * FROM cliente"
    sql.query(connectionString, query, (err, rows) => {
        if(err){
            //Si ocurre un error al consultar la base de datos, responde con error 500
            return res.status(500).send("Error al obtener mensaje desde la base de datos.")
        }
        //Renderiza la vista 'index' y pasa los mensajes y el usuario a la plantilla
        res.json(rows)
        });
    });


//Maneja las solicitudes POST a la ruta "/guardar"
app.post('/guardar', (req, res) => {
    //Extrae los datos enviados desde el formulario
    const {nombre, telefono, direccion, fecha} = req.body

    const query = "INSERT INTO cliente (nombre, telefono, direccion, fecha) VALUES (?, ?, ?, GETDATE())"
    const params = [nombre, telefono, direccion, fecha]

    //Ejecuta la consulta de insercion
    sql.query(connectionString, query, params, (err) => {
        if(err) {
            return res.status(500).send("Error al guardar el mensaje.")
        }
    //redirige al usuario a la pagina principal despues de guardar
    res.redirect('/')
    });
});

//Realiza una consulta simple para verificar la conexion a la base de datos
sql.query(connectionString, "SELECT 1", (err) => {
    if(err){
        console.error("❌ Error al conectar con la base de datos:", err.message)
    } else{
    //Si la conexion es exitosa, muestra mensaje de exito en consola
    console.log("✅ Conexion con la base de datos verificada correctamente.")
    };
});
    //Inicia el servidor
    app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});