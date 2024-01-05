let express = require("express");

let indexRouter = require("./routes/index");

let app = express();
app.use(express.json());

app.get("/", (request, response) => {
  try {
    response.status(200).send("WELLCOME");
  } catch (error) {
    console.log(error);
  }
});

app.use("/", indexRouter);

app.listen(3003, () => {
  console.log("SERVER RUN...");
});
