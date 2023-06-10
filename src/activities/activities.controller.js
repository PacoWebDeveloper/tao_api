const Activities = require('../models/activities.model')
const uuid = require('uuid')
const date = require('../utils/date')

const activitiesController = {
  createActivity: async (activityObj) => {
    const startDate = date(activityObj.start_date)
    const endDate = date(activityObj.end_date)
    
    const newActivity = {
      id: uuid.v4(),
      name: activityObj.name,
      description: activityObj.description,
      start_date: startDate,
      end_date: endDate
    }

    const data = await Activities.create(newActivity)
    return data
  },

  findAllActivities: async() => {
    const data = Activities.findAll()
    return data
  },

  editActivity: async (id, activityObj) => {
    let startDate = ''
    let endDate = ''
    const acceptedParams = [
      'name','description','start_date','end_date'
    ]
    const paramsNotRecognized = []
    
    const activityObjKeys = Object.keys(activityObj)

    for (let param of activityObjKeys) {
      if (!acceptedParams.includes(param))
        paramsNotRecognized.push(param)
    }
    
    if (activityObj.start_date)
      startDate = date(activityObj.start_date)
    if (activityObj.end_date)
      endDate = date(activityObj.end_date)


    if (paramsNotRecognized.length === 0) {
      const data = await Activities.update(activityObj,{
        where: {id}
      })
      return data
    } else {
      const data = [{ paramsNotRecognized }]
      return data
    }
    
  }
}

module.exports = activitiesController