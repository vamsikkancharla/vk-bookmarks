var connectionString =
    'mongodb://admin:Ilove#00@vk-bookmarks-shard-00-00-efrik.mongodb.net:27017,vk-bookmarks-shard-00-01-efrik.mongodb.net:27017,vk-bookmarks-shard-00-02-efrik.mongodb.net:27017/bookmarks?replicaSet=VK-Bookmarks-shard-0';

var db = require('mongoose');
db.connect(connectionString, {
    authdb: 'admin',
    useMongoClient: true,
    ssl: true
});
//db.Promise = global.Promise;

db.connection.on('error', console.error.bind(console, 'connection error:'));
db.connection.once('open', function callback() {
    console.log("I am connected");
});

module.exports = db;