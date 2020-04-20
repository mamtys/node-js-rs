const mongoose = require('mongoose');

const { MONGO_CONNECTION_STRING } = require('./config');

console.log(`Process ${process.pid} connecting to db ...`);

mongoose
  .connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(
    async () => {
      await mongoose.connection.db.dropDatabase();
      console.log(`Process ${process.pid} connected to db.`);
    },
    err => console.error(`Connection error. Message: ${err.message}.`)
  );
