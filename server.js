/** 
 * Backend logic for expense app
 * @module server
 * @requires express
 * @requires cors
 * @requires mongoose
 * @requires dotenv
 * @requires path
 */

const express = require("express");
const cors = require("cors");
const path = require("path");
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

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
    //set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})