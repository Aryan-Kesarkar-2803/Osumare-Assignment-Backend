const express = require("express");
const { Router } = require("./routes/router");
const app = express();

app.listen(8000,()=>{
    console.log(`Server started on port ${8000}`);
})

app.use(express.json());
app.use("/",Router);