const express = require("express");
const AuthController = require("./controllers/AuthController");
const AdminController = require('./controllers/AdminController')

const app = express();

app.use(express.json())

app.use('/auth', AuthController)
app.use('/admin', AdminController)

app.listen(3001, () => console.log('Server is running on port 3001'))
