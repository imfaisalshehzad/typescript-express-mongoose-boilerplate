import express from "express";
import {json} from "body-parser";
import {router} from "./router";

const app = express();
const port = process.env.PORT || 3000;
app.use(json());
app.use(router);
app.get("/", (req, res) => {
    res.send("Hello World!!!!");
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});