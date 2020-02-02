import express from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import mongo from "connect-mongo";
import path from "path";
import mongoose from "mongoose";
import bluebird from "bluebird";
import { MONGODB_URI, SESSION_SECRET, NATIVESCRIPT } from "./infrastructure/secrets";

const MongoStore = mongo(session);

// Controllers (route handlers)
import * as homeController from "./api/home";

// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = MONGODB_URI;
mongoose.Promise = bluebird;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } ).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    store: new MongoStore({
        url: mongoUrl,
        autoReconnect: true
    })
}));


//If being hosted from azure (not native script) and production, then host the angular app too.
if(process.env.NODE_ENV === 'production' && !NATIVESCRIPT) {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../../frontend/build')))
  
    // Handle angular routing, return all requests to angular app
    app.get('*', function(req: any, res: any) {
      res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'))
    })
  }


/**
 * Primary app routes.
 */
app.get("/", homeController.index);

export default app;
