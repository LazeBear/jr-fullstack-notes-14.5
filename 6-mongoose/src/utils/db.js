const mongoose = require('mongoose');

// function connectToDB(){}
const connectToDB = () => {
  const connectionString = process.env.CONNECTION_STRING;
  if (!connectionString) {
    console.error('connection string not defined');
    // 正常退出
    // 非正常退出
    // 人为正常退出
    // process.exit(0)
    // 人为非正常退出
    process.exit(1);
  }

  // xxxx:xxxx@domain.com
  const db = mongoose.connection;
  db.on('connected', () => {
    console.log(`DB connected, ${connectionString}`);
  });

  db.on('error', (error) => {
    console.error(error.message);
    process.exit(2);
  });

  db.on('disconnected', () => {
    console.log('db connection lost');
  });

  return mongoose.connect(connectionString);
};

module.exports = connectToDB;
