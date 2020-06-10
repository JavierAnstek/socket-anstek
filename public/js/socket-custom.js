var socket = io();
// valida conexión con el socket back
socket.on('connect', function() {
    console.log('conectado al servidor socket');
});

// valida desconexión con el server
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// envia mensaje al servidor
socket.emit('enviarMensaje', {
    user: 'Javier M',
    msg: 'Hola Servidor'
}, function(resp) {
    console.log(resp);
});

// escucha el mensaje enviado desde el server socket
socket.on('enviarMensaje', function(dataMsg) {
    console.log(dataMsg);
});