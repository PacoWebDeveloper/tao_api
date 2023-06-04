const Activities = require('../models/activities.model')
const uuid = require('uuid')

const activitiesController = {
  createActivity: async (activityObj) => {
    const newActivity = {
      id: uuid.v4(),
      name: activityObj.name,
      description: activityObj.description,
      start_date: activityObj.start_date,
      end_date: activityObj.end_date
    }

    const data = await Activities.create(newActivity)
    return data
  },

  findAllActivities: async() => {
    const data = Activities.findAll()
    return data
  }
}

module.exports = activitiesController