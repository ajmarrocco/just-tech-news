const path = require('path');
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// built-in Express.js middleware function that can take all of the contents of a folder and serve them as static assets
// DO NOT put under app.use(routes)
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);


// turn on connection to db and server.  
// Force = true (we will make the tables re-create if there are any association changes)
// Force = false (doesn't recreate tables for any association changes)
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});