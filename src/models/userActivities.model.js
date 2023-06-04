const { DataTypes } = require("sequelize")

const db = require('../utils/database')

const UserActivities = db.define('UserActivities', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  activity_id: {
    type: DataTypes.UUID,
    allowNull: false
  }
})

module.exports = UserActivities