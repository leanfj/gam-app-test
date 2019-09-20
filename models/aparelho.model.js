const mongoose = require('mongoose');
const aparelhoSchema = new mongoose.Schema({
  imei: String
});

module.exports = mongoose.model('aparelho', aparelhoSchema);
