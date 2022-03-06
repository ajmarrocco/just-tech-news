// import packages
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //checks format http://foo.com
                isURL: true
            }
        },
        // Foreign key, matching link
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                // Establishes relationships between this post and the user
                model: 'user',
                key: 'id'
            }
        }
    },
    // Configures meta data and naming conventions
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

// exports post object
module.exports = Post;