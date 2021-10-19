/** 
 * Backend logic for expense app
 * @module server
 * @requires express
 * @requires cors
 * @requires mongoose
 * @requires dotenv
 */

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Successfully connected to MongoDB!")
})

const router = require("./routes/expenses")
app.use("/expenses", router);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})