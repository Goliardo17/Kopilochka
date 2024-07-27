const express = require("express");
const cors = require("cors");
const app = express();
const entryRoutes = require('./routes/index.js')
const PORT = 3333

app.use(cors());
app.use(express.json())
app.use(entryRoutes)

app.listen(PORT, () => console.log('Server start on port: ' + PORT));