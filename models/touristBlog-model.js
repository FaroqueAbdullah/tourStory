const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    blogTitle : String,
    blogLocation : String,
    blogthumbnil : String,
    blogDescription : String,
    blogAuthorId : String,
    blogAuthorName : String,
    blogAuthorThumbnil : String
});

const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;
