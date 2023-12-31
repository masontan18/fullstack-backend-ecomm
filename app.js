import express from "express" 
import { usersRouter } from "./routes/users.js"
import cookieParser from "cookie-parser"
import { corsOptions } from "./config/corsOptions.js"
import cors from "cors"
import { credentials } from "./middlewares/credentials.js"
import { authRouter } from "./routes/auth.js"
import { refreshRouter } from "./routes/refresh.js"
import morgan from "morgan" // add this
import { imageRouter } from "./routes/image.js"
import { checkoutRouter } from "./routes/checkout.js"

const app = express()

// third party middleware to console log the http request executed via npm install morgan
app.use(morgan('combined'))

// custom and third party middlewares for cors
app.use(credentials)
app.use(cors())

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

// third party middleware for cookie
app.use(cookieParser());

// router
app.use("/users", usersRouter)
app.use("/auth", authRouter)
app.use("/refresh", refreshRouter)
app.use("/image", imageRouter)
app.use("/create-checkout-session", checkoutRouter)


export { app }