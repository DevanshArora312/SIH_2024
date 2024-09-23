const express = require("express");
const cors = require("cors");
const Moralis = require("moralis").default;
require("dotenv").config();
const app = express();
app.use(cors());
const port = process.env.PORT
Moralis.start({
    apiKey : process.env.MORALIS_API
}).then(()=>{
    app.listen(port, ()=>{
        console.log(`istening at -> ${port}`)
    })
})