const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Todo = new Schema({
    user_name: {
        type: String
    },
    user_pwd: {
        type: String
    }
});
module.exports = mongoose.model('Todo', Todo);