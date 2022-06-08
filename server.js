const express = require("express");
const morgan = require("morgan");
const bodyparser = require("bodyparser");
const path = require("path");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;
app.use(morgan("tiny"));
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use('/css', express.static(path.resolve(__dirname, "public/css")));
app.use('/img', express.static(path.resolve(__dirname, "public/img")));
app.use('/js', express.static(path.resolve(__dirname, 'public/js')));


app.get("/", require("./routes/router"))

app.listen(PORT, () => console.log(`server running on port : ${PORT}`))

