import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './router/productRouter.js'
import cors from 'cors'

dotenv.config()

connectDB()

const app = express()



// init Middleware
app.use(express.json({ extended: false }))

app.use(cors())

app.get('/', (req, res) => {
    res.send("API is running...")
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))