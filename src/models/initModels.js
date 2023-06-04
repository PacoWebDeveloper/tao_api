const User = require('./user.model')
const UserActivities = require('./userActivities.model')
const Activities = require('./activities.model')

const initModels = () => {
  User.belongsToMany(Activities, {through: 'UserActivities'})
  Activities.belongsToMany(User, {through: 'UserActivities'})
}

module.exports = initModels