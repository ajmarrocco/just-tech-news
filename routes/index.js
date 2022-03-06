const router = require('express').Router();
// Collects packaged API routes endpoints
const apiRoutes = require('./api');

//prefixes userRoutes with the path /users. Takes the routes and implement them to another router instance 
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;