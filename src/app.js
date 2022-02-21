const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const Register = require("./models/register");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");
const temp_path = path.join(__dirname, "../templates/views");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", temp_path);
app.set("view engine", "hbs");
app.use(express.static(static_path));
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/backend/templates/views/index.hbs", async (req, res) => {
  try {
    const Register = new GROCOSchema({
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      subject: req.body.subject,
      message: req.body.message,
    });
    const registered = await Register.save();
    res.status(201).render("index");
  } catch (error) {
    res.status(400).send(error);
  }
});
app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
