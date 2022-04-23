const mongoose = require("mongoose");
const bookController = require("./controllers/bookController");

const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(express.json());

app.set("port", process.env.PORT || 3000);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({limit:'10mb', extended:false}))

const methodOverride = require("method-override");
app.use(methodOverride("_method", {methods: ["POST", "GET"]}));

require("dotenv").config();
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useUnifiedTopology: true });
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

router = express.Router();
app.use("/", router);

router.get("/home", bookController.index);
router.get("/books/:id", bookController.show);
router.get("/style", bookController.sendReqCss);
router.get("/addNewBook", bookController.new);
router.get("/DeleteABook", bookController.deleteBook);
router.post("/home/create", bookController.create, bookController.redirectView);
router.delete("/home/:id/delete", bookController.delete, bookController.redirectView);

app.listen(app.get("port"), () => {
    console.log(`Server running on port:${app.get("port")}`);
});