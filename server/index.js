const express = require("express");
const app = express();

const http = require("http");
const { Server } = require("socket.io");
const config = require("./config");
const SERVICE_ENDPOINT = config.serviceEndpointPrefix;

const Cors = require("cors");

const restService = require("./rest-service");

const server = http.createServer(app);
app.use(Cors());
app.use(express.json());
app.use(SERVICE_ENDPOINT, restService.router);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

io.on("connection", (socket) => {
  socket.on("send_message", ({ senderId, receiverId }) => {
    socket.broadcast.emit("receive_message", { senderId, receiverId });
  });
});

const port = process.env.PORT ? process.env.Port : 4042;

server.listen(port, () => {
  console.log("Server listening on port", port);
});
