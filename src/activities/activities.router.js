const router = require('express').Router()
const activitiesService = require('./activities.services')

router.post('/activities', activitiesService.postActivity)
router.get('/activities', activitiesService.getAllActivities)
router.patch('/activities', activitiesService.patchActivity)
router.delete('/activities', activitiesService.deleteActivity)

module.exports = router