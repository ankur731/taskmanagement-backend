const express = require("express");
const cors = require("cors");
const {  taskRouter } = require('./routers/task');

require("./utils/db");
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', taskRouter);

app.get("/", function (req, res) {
  res.send("Hello world i'm server");
});



const PORT = 8000;
app.listen(PORT, (error) => {
  console.log(`Server is running on  port ${PORT}`);
});
