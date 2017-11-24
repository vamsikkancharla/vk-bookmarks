var express = require('express');
var BookmarksModel = require('../model/bookmark')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    BookmarksModel.find({}, function(error,bookmarks ){
        res.send(bookmarks);    
    });
});

router.get('/:id', function(req, res, next) {
    console.log("ID is "+ req.params.id);
    BookmarksModel.findOne({_id: req.params.id}, function(error,bookmarks ){
        res.send(bookmarks);    
    });
});

router.delete('/:id', function(req, res, next) {
    console.log("ID is "+ req.params.id);
    BookmarksModel.findByIdAndRemove({_id: req.params.id}, function(error,bookmarks ){
        res.send(bookmarks);    
    });
});

router.post('/', function(req, res, next) {
    console.log("Json Object "+ req.body);
    var newBookmarkObj = new BookmarksModel(req.body);  
    newBookmarkObj.save(function(err, bookmark) {  
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(bookmark);
    });   
});

module.exports = router;
