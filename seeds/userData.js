const { User } = require('../models');

const UserData = [
  {
    username: 'Justin',
    email: 'dong135790@gmail.com',
    password: '1234567890'
  },
];

const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;
