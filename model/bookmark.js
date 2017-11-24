var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var BookmarkSchema = new Schema({
    id: ObjectId,
    user: String,
    name: String,
    url: String,
    description: String,
    keywords: Array,
    creationdate: Date
});

var Bookmark = mongoose.model('Bookmark', BookmarkSchema);
module.exports = Bookmark;