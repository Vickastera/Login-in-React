const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

let Todo = require('./schema.model');
var uri = "mongodb://localhost:27017";
app.use(cors());
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});
Todo.find({ user_name: "Victoria", user_pwd: 123456 },function(err, docs){
  if(!docs[0]){
    book1 = new Todo({ user_name: 'Victoria', user_pwd:123456});
    book1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(book.user_name + " saved in database.");
    });
  }
});


todoRoutes.route('/login').get(function(req, res) {
  Todo.find({ user_name: req.query.user, user_pwd: req.query.pwd },function(err, docs){
    res.json(docs);
  });
   
});

app.use('/todos', todoRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});