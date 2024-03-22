const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // 기타 필드
});

module.exports = mongoose.model('User', userSchema);