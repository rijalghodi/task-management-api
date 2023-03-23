const express = require("express");
const app = express();
const port = process.env.PORT ?? 1234;
const bodyParser = require("body-parser");
const tasksRouter = require("./routes/tasks");
const docsRouter = require("./routes/docs");

// bodyParser is used to parse the request body
app.use(bodyParser.json());

app.use("/docs", docsRouter);

app.get("/", (req, res) => {
  res.send("Hello. Welcome to Todo App.");
});

app.use("/api/v1/tasks", tasksRouter);

app.listen(port, () => {
  console.log(`App listening on ports ${port}`);
});
