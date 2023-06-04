const activitiesController = require('./activities.controller')
const responses = require('../utils/handleResponses')

const activitiesService = {
  postActivity: (req, res) => {
    const activityObj = req.body

    activitiesController.createActivity(activityObj)
      .then(data => {
        responses.success({
          res,
          status: 201,
          message: 'Activity created succesfully',
          data
        })
      })
      .catch(err => {
        responses.error({
          res,
          status: 400,
          data: err,
          message: 'Error occurred when creating activity'
        })
      })
  },

  getAllActivities: (req, res) => {
    activitiesController.findAllActivities()
      .then(data => {
        if (data.length > 0)
          responses.success({
            res,
            status: 200,
            message: 'Activities retreived successfully',
            data
          })
        else
          responses.error({
            res,
            status: 404,
            message: 'Activities not found'
          })
      }) 
      .catch(err => {
        responses.error({
          res,
          status: 400,
          message: 'Error occurred when getting activities'
        })
      })
  }
}

module.exports = activitiesService