const router = require('express').Router();
// Collects packaged API routes endpoints
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
//prefixes userRoutes with the path /users. Takes the routes and implement them to another router instance 
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;