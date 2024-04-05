const express = require('express');
const cors = require('cors');
const { Sequelize } = require("sequelize");
const { sequelize } = require('./models');
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// require('./config/mongoDB');
// require('./config/postgre');



app.use("/", require("./routes"));



app.listen(process.env.PORT, async ()=> {
    await sequelize.sync();
    console.log(`server running at ${process.env.PORT}`);
})