let io;

let usuariosEnLinea = [];

exports.socketConnection = (server, options) => {
  io = require("socket.io")(server, options);
  io.on("connection", (socket) => {
    socket.join(socket.request._query.id);
    // Envia todos los usuarios en linea a todos los usuarios
    io.emit("obtener-usuarios", JSON.stringify(usuariosEnLinea));
    // Nuevo usuario agregado
    socket.on("nuevo-usuario-agregado", (nuevoIdCliente) => {
      if (
        !usuariosEnLinea.some((usuario) => usuario.idCliente === nuevoIdCliente)
      ) {
        // Si el usuario no se ha agregado antes
        usuariosEnLinea.push({
          idCliente: nuevoIdCliente,
          socketId: socket.id,
        });
        console.log("Hay un nuevo usuario", usuariosEnLinea);
      }
      // Envia todos los usuarios en linea a todos los usuarios
      io.emit("obtener-usuarios", JSON.stringify(usuariosEnLinea));
    });

    socket.on("usuario-desconectado", (idCliente) => {
      // Remueve el usuario de los usuarios activos
      usuariosEnLinea = usuariosEnLinea.filter(
        (usuario) => usuario.idCliente !== idCliente
      );
      console.log("usuario desconectado", idCliente);
      // Envia todos los usuarios en linea a todos los usuarios
      io.emit("obtener-usuarios", JSON.stringify(usuariosEnLinea));
    });
  });
};

exports.emitirEvento = (evento, datos) => {
  io.emit(evento, datos);
};
