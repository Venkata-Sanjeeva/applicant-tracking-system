const express = require("express")

require("dotenv").config()

const cors = require("cors")
const router = require("./routes/APTRoute")

const connectDB = require("./db/connect")

const app = express();
// Missing Body Parser:

// If you’re not using a body parser middleware (such as express.json()), your server won’t be able to parse the JSON payload in the request body. Add the following line to your server setup:
// javascript
// Copy code
// app.use(express.json());

app.use(express.json());

app.use(cors());

app.use("/", router)

const start = async () => {
    try {

        await connectDB(process.env.MONGO_URI);
        app.listen(3000, console.log("Server Running at PORT 3000!"));

    } catch (error) {
        console.log(error);
    }
}

start();