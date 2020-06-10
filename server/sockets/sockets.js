const { io } = require('../server');

/** Escucha la conexión del cliente */
io.on('connection', (client) => {
    console.log('Usuario conectado al server');

    /** Valida desconexión del cliente */
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    /** Escucha los mensajes del cliente */
    client.on('enviarMensaje', (dataMsg, callback) => {
        // console.log(dataMsg);
        // if (dataMsg.user) {
        //     callback({ msg: 'TODO SALIO BIEN, NADA QUE TEMER' });
        // } else {
        //     callback({ msg: 'TODO SALIO MAL :(' });
        // }

        /** Hacemos BROADCAST para que todos los usuarios escuchen
         * el evento que todos estan escuchando se llama enviar mensaje
         * NOTA: no es necesario enviar la estructura {} porque el objeto
         * trae la misma estructura a recibir
         */
        client.broadcast.emit('enviarMensaje', dataMsg);



    });

    /** Envía un mensaje */
    client.emit('enviarMensaje', {
        user: 'Soy Server Socket',
        msg: 'BIENVENIDO!!!'
    });
});