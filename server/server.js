const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');
const app = express()
const PORT = 4000
const cors = require('cors')
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



app.use(routes)


sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`now listening on ${PORT}`));
});