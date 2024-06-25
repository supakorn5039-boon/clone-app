import express from 'express'
import dotenv from 'dotenv'
import connectMongoDB from './db/connectMongoDB.js'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`)
    connectMongoDB()
})