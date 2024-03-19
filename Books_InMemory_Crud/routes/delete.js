// Acquire express node package
var express = require('express');

// body-parser is used to parse the request body and populate the req object
var bodyParser = require('body-parser');

// ODM - Object Data Mapping
// Mongoose

var mongoose = require('mongoose');

// Create Express app
var app = express();

app.set('port',3300);
app.use(bodyParser.json());

// Database connectivity
var dbHost = 'mongodb://localhost:27017/BooksDB';
mongoose.connect(dbHost);

//book schema

var bookSchema = mongoose.Schema({
    name:String,
    isbn:{type:String,index:true,unique:true},
    author:String,
    pages:Number
});

var Book = mongoose.model('Book',bookSchema);

app.listen(app.get('port'),function(){
    console.log('Server up at https://localhost:'+app.get('port'));
});

// To allow CORS - Cross Origin Resrouce Sharing 
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.delete('/books/:isbn',function(req,res){
    Book.findOneAndRemove({isbn:req.params.isbn},
        function(err,result){
            if(err) throw err;
            res.json({
                message:'Successfuly deleted the Book ',book:result
            });
        });
})

module.exports = router;