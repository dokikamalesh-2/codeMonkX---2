require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const Language = require('./models/Language');
const User = require('./models/User');

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

//MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));



//AUTH
// Register
app.post('/api/register', async (req, res) => {
  try {
    let { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ error: "All fields required" });

    username = username.trim();

    const existing = await User.findOne({ username });
    if (existing)
      return res.status(400).json({ error: 'Username already taken' });

    const user = new User({ username, password });
    await user.save();

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  try {
    let { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user)
      return res.status(400).json({ error: 'User not found' });

    const match = await user.comparePassword(password);
    if (!match)
      return res.status(400).json({ error: 'Incorrect password' });

    res.json({
      success: true,
      username: user.username,
      userId: user._id   //  IMPORTANT
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//QUIZ

//Topics
app.get('/api/topics', async (req, res) => {
  const { lang } = req.query;

  const data = await Language.findOne({ language: lang });
  if (!data) return res.json([]);

  res.json(data.topics.map(t => ({
    topicName: t.topicName
  })));
});

// Questions
app.get('/api/questions', async (req, res) => {
  const { lang, topic, level } = req.query;

  const data = await Language.findOne({ language: lang });
  if (!data) return res.json([]);

  const topicObj = data.topics.find(t => t.topicName === topic);
  if (!topicObj) return res.json([]);

  const levelObj = topicObj.levels.find(l => l.levelNumber == level);
  if (!levelObj) return res.json([]);

  res.json(levelObj.questions);
});

//PROGRESS

// Save progress
app.post('/api/progress', async (req, res) => {
  try {
    const { userId, lang, topic, level, score } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(400).json({ error: 'User not found' });

    // Remove old
    user.completedLevels = user.completedLevels.filter(
      l => !(l.lang === lang && l.topic === topic && l.level === level)
    );

    // Add new
    user.completedLevels.push({ lang, topic, level, score });

    await user.save();

    res.json({ success: true });

  } catch (err) {
    console.error('PROGRESS ERROR:', err.message);
    res.status(500).json({ error: err.message });
}
});

// Get progress
app.get('/api/progress', async (req, res) => {
    const { userId, lang, topic } = req.query; //  add topic

    const user = await User.findById(userId);
    if (!user) return res.json({ completedLevels: [], currentLevel: 1 });

    //filter by BOTH lang AND topic
    const filtered = user.completedLevels.filter(
        l => l.lang === lang && l.topic === topic
    );

    const completedLevels = filtered.map(l => l.level);
    const maxLevel = completedLevels.length > 0 ? Math.max(...completedLevels) : 0;

    res.json({
        completedLevels,
        currentLevel: maxLevel + 1
    });
});

//PROFILE

app.get('/api/profile', async (req, res) => {
  const { username, lang } = req.query;

  const user = await User.findOne({ username });
  if (!user) return res.json({});

  const filtered = user.completedLevels.filter(l => l.lang === lang);

  const completedLevels = filtered.length;
  const bestScore = Math.max(0, ...filtered.map(l => l.score));

  const topicProgress = {};
  filtered.forEach(l => {
    topicProgress[l.topic] = (topicProgress[l.topic] || 0) + 1;
  });

  const recentScores = filtered
    .sort((a, b) => b.date - a.date)
    .slice(0, 5);

  res.json({
    completedLevels,
    bestScore,
    topicProgress,
    recentScores,
  });
});

//SERVER

app.listen(3000, () => {
  console.log(" Server running on http://localhost:3000");
});
