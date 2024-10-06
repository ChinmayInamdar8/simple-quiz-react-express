const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/quiz');

const quizSchema = new mongoose.Schema({
    question:String,
    option1:String,
    option2:String,
    option3:String,
    option4:String,
    answer:Number,
    index:Number
});

const quiz = mongoose.model('quiz', quizSchema);

module.exports = {quiz};