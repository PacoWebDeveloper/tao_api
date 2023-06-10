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
  },

  patchActivity: (req, res) => {
    const id = req.query.id
    const activityObj = req.body
    
    activitiesController.editActivity(id, activityObj)
      .then(data => { console.log(data)
        if (data[0] === 1) {
          responses.success({
            res,
            status: 200,
            data,
            message: 'Activity updated successfully'
          })
        } else {
          responses.error({
            res,
            status: 400,
            message: 'Error ocurred when editing activity',
            data,
            fields: [
              'name', 'description', 'start_date', 'end_date'
            ]
          })
        }
      })
      .catch(err => {
        responses.error({
          res,
          status: 304,
          message: 'Error ocurred when editing activity',
          data:  err,
          fields: [
            'name', 'description', 'start_date', 'end_date'
          ]
        })
      })
  }
}

module.exports = activitiesService