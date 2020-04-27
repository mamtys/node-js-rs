const mongoose = require('mongoose');
const User = require('../resources/users/user.service');

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
      await User.create({ login: 'admin', password: 'admin' });
      console.log('Connected to db.');
    },
    err => console.error(`Connection error. Message: ${err.message}.`)
  );
