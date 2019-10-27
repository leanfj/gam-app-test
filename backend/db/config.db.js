const mongoose = require('mongoose');

module.exports = uri => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Success connection');
  });

  process.on('SIGINT', () => {
    db.close(() => {
      console.log('MongoDB desconectado pelo termino da apicação');
      process.exit(0);
    });
  });
};
