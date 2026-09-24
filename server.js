require("dotenv").config(); 
require("./db/connection");
const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 3200;


app.use(morgan('dev'));
app.use(express.json());





app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});



