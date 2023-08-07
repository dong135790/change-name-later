const { User } = require('../models');

const userData = [
  {
    username: 'Justin',
    email: 'dong135790@gmail.com',
    password: '1234567890',
  },
];

const seedUser = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUser;
