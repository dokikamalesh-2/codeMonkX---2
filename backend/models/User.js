const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const CompletedLevelSchema = new mongoose.Schema({
  lang:  { type: String, required: true, trim: true },
  topic: { type: String, required: true, trim: true },
  level: { type: Number, required: true, min: 1 },
  score: { type: Number, required: true, min: 0, max: 50 },
  date:  { type: Date, default: Date.now }
});

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },

  completedLevels: {
    type: [CompletedLevelSchema],
    default: []
  },

  // for best scores
  bestScores: {
    type: Map,
    of: Number,
    default: {}
  }

}, { timestamps: true });

//Hash password
UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 10);
});

//Compare password
UserSchema.methods.comparePassword = function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model('User', UserSchema);