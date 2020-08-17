exports.get_users = (req, res, next) => {
  //Send mock user data
  const user_data = require('../../mock/users.json');
  res.json(user_data);
};
