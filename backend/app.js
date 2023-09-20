const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cors = require('cors'); 


const corsOptions = {
    origin: 'https://equivalenceua.github.io'
  };
const app = express();
app.use(express.json());
app.use(cors(corsOptions))
app.use("/api/users", router);


mongoose
    .connect(
        "mongodb+srv://admin:Barabolya987^@cluster0.i2iiqvu.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(()=>app.listen(3000))
    .then(()=>
    console.log("Connected to Database and listening to Localhost 5000")
    )
    .catch((err)=> console.error(err));