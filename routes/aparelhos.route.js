const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Lista todos aparelhos');
});

module.exports = router;
