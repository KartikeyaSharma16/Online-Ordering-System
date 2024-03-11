const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');

// Import routers
const orderRouter = require("./routes/order");
const userRouter = require("./routes/userSignup");
const menuRouter = require("./routes/menu");
const cartRouter = require("./routes/cart");
const paymentRouter = require("./routes/payment");
const placeOrderRouter = require("./routes/placeOrder");

// Initialize Express app and create HTTP server
const app = express();
const server = http.createServer(app);

// Initialize Socket.io
const io = new Server(server, {
  cors: {
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Middleware
app.use(cors());
app.use(express.json({ extended: false }));
app.use(bodyParser.json());

// Routers
app.use("/order", orderRouter);
app.use("/user", userRouter);
app.use("/menu", menuRouter);
app.use("/cart", cartRouter);
app.use("/pay", paymentRouter);
app.use("/api", placeOrderRouter);

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log("connected");
  socket.on('newOrder', (order) => {
    // Broadcast the new order to all connected clients (dashboard)
    io.emit('newOrder', order);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
