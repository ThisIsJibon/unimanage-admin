const express = require("express");
const { Server } = require("socket.io");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const resultRouter = require("./routers/resultRouter");
const departmentRouter = require("./routers/departmentRouter");
const sectionRouter = require("./routers/sectionRouter");

const session = require("express-session");
const server = require("http").createServer(app);
require("dotenv").config();


const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: "true",
  },
});

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    credentials: true,
    name: "sid",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
      httpOnly: true,
      expires: 1000 * 60 * 60 * 24 * 7,
      sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
    },
  })
);
app.use("/result",resultRouter);
app.use("/department",departmentRouter);
app.use("/section",sectionRouter);

io.on("connect", socket => {});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
