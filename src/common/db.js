const mongoose = require('mongoose');

const { MONGO_CONNECTION_STRING } = require('./config');

console.log('Connecting to db ...');

mongoose
  .connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(
    async () => {
      await mongoose.connection.db.dropDatabase();
      console.log('Connected to db.');
    },
    err => console.error(`Connection error. Message: ${err.message}.`)
  );
