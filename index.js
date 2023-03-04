const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const listRoute = require("./routes/lists");

dotenv.config();

const app = express();

mongoose
    .set('strictQuery',false)
    .connect(process.env.MONGO_DB_CONNECTION)
    .then(()=> console.log("DB Connection Successful!"))
    .catch((err)=> {
        console.log(err);
    });
    
app.use(express.json());
app.use(cors({
    credentials: 'include'
}));

const PORT = 8000;

app.use("/api/lists",listRoute);


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});

