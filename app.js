const express = require("express");
const app = express();

app.set("view engine", "ejs");
// app.use(express.static(public));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./routes/api/users");
app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("Home route");
});

app.listen(
  process.env.PORT || 3000,
  console.log("Application has been started on the port: 3000")
);
