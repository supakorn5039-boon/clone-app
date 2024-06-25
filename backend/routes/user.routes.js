import express from 'express'
import { protectedRoute } from '../middleware/protect.routes.js'
import { followUnfollowUser, getUserProfile } from '../controllers/user.controller.js'

const router = express.Router()

router.get('/profile/:username', protectedRoute, getUserProfile)
// router.get('/suggested', protectedRoute)
router.post('/follow/:id', protectedRoute, followUnfollowUser)
// router.post('/update', protectedRoute)

export default router