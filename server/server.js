const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
/** Define la aplicación para correr el servidor */
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
/** sirve contenido estatico */
app.use(express.static(publicPath));

/** Inicializa el socket.io 
 * io: esta es la comunicación socket del
 * backend
 */
module.exports.io = socketIO(server);
require('./sockets/sockets');

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});