import express from "express";
import rootRouter from "./router/rootRouter.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const port = 8080;

app.use(rootRouter);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
