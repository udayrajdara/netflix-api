const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
}).then(()=>{
    console.log("DB Connected")
});

app.use("/api/user", userRoutes);

app.listen(5000, console.log("server started"))