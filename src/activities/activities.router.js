const router = require('express').Router()
const activitiesService = require('./activities.services')
const passportJwt = require('../middleware/auth.middleware')

router.post('/activities', activitiesService.postActivity)
router.get('/activities', activitiesService.getAllActivities)
router.get('/userActivities', passportJwt, activitiesService.getActivitiesByUserId)
router.patch('/activities', passportJwt, activitiesService.patchActivity)
router.delete('/activities', passportJwt, activitiesService.deleteActivity)

module.exports = router