const router = require('express').Router()
const activitiesService = require('./activities.services')

router.post('/activities', activitiesService.postActivity)
router.get('/activities', activitiesService.getAllActivities)

module.exports = router