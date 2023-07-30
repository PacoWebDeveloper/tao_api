const User = require('./user.model')
//const UserActivities = require('./userActivities.model')
const Activities = require('./activities.model')
const { DataTypes } = require('sequelize')

const initModels = () => {
  /* User.belongsToMany(Activities, {through: 'UserActivities'})
  Activities.belongsToMany(User, {through: 'UserActivities'}) */

  User.hasMany(Activities)
  Activities.belongsTo(User)
}

module.exports = initModels