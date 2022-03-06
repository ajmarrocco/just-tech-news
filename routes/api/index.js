const router = require('express').Router();
// Collects packaged API routes endpoints
const userRoutes = require('./user-routes.js');
//prefixes userRoutes with the path /users. Takes the routes and implement them to another router instance 
router.use('/users', userRoutes);

module.exports = router;