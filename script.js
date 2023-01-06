import express from "express";
import router from "./routes.js";
import bodyParser from "body-parser";

const app = express();

const port = 3020;

app.listen(port, (req, res) => {
    console.log(`server is running on ${port}`)
})

app.use(bodyParser.json());

app.use("/api/characters", router)