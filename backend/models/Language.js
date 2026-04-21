const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    question: String,
    options: [String],        // array of 4 options
    correct_answer: String,
});

const LevelSchema = new mongoose.Schema({
    levelNumber: Number,
    questions: [QuestionSchema]
});

const TopicSchema = new mongoose.Schema({
    topicNumber: Number,
    topicName: String,
    levels: [LevelSchema]
});

const LanguageSchema = new mongoose.Schema({
    language: String,         // "C", "C++", "Python", "Java"
    topics: [TopicSchema]
});

module.exports = mongoose.model('Language', LanguageSchema);