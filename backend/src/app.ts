import { RestaurantRepository } from "./domain/RestaurantRepository"
import { RestaurantRepositoryImpl } from "./infrastructure/database/model/RestaurantRepositoryImpl"
import express from "express"
import compression from "compression" // compresses requests
import session from "express-session"
import bodyParser from "body-parser"
import mongo from "connect-mongo"
import path from "path"
import mongoose from "mongoose"
import bluebird from "bluebird"
import {
  MONGODB_URI,
  SESSION_SECRET,
  NATIVESCRIPT
} from "./infrastructure/secrets"
import restaurantController from "./api/restaurantController"
import cors from "cors"

const MongoStore = mongo(session)

// Controllers (route handlers)
import visitController from "./api/VisitController"
import VisitService from "./api/visitService"

// Create Express server
const app = express()
app.use(cors())

// Connect to MongoDB
const mongoUrl = MONGODB_URI
mongoose.Promise = bluebird

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
  })
  .catch(err => {
    console.log(
      "MongoDB connection error. Please make sure MongoDB is running. " + err
    )
    // process.exit();
  })

// Express configuration
app.set("port", process.env.PORT || 3000)
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    store: new MongoStore({
      url: mongoUrl,
      autoReconnect: true
    })
  })
)

/**
 * Primary app routes.
 */
const repository: RestaurantRepository = new RestaurantRepositoryImpl()
const visitService: VisitService = new VisitService(repository)
// TODO: this isn't right, should use some kind of dependency injection framework, like Invertify.
app.use("/restaurants", restaurantController(repository))
app.use("/visits", visitController(visitService))

export default app
