import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import routes from "./routes/index.js"

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(routes)

app.use((error, req, res, next) => {
    console.error(error)

    return res.status(500).json({ error: error.toString() })
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})