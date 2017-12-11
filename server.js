/** App Dependencies */
let baseRoute = "/api";
let port = process.env.PORT || 8000;
let bodyParser = require("body-parser");
let express = require("express");
let app = express();
let server = require("http").createServer(app);
let io = require("socket.io").listen(server);

/** Start up server */
server.listen(port, () => {
    console.log(`For Debugging => Listening on: http://localhost:${port}`);
});

/** Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** Initialize Controllers */
let ctrlInit = new (require("./Controllers/controllersInitializer"))({
   baseRoute: baseRoute,
   app: app
});
ctrlInit.initControllers();

/** Initialize Async with socket.io */
io.on("connection", (socket) => {
    /**If you wanna do something with individual sockets. Feel free!*/
});

/** Serve UI */
app.use(express.static("Webroot"));


process.on('uncaughtException', function (err) {
    console.log(err);
});