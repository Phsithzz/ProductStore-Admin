import express from "express"

import helmat from "helmet"
import morgan from "morgan"
import cors from "cors"

import dotenv from "dotenv"

import { sql } from "./config/db.js"

import productRoute from "./routes/productRoute.js"


dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(helmat())
app.use(morgan("dev"))

app.use(productRoute)

async function initDB(){
    try {
        await sql`
        CREATE TABLE IF NOT EXISTS products(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            price DECIMAL(10,2) NOT NULL,
            create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP    

        )
        `

        console.log("Database init")
    } catch (err) {
        console.log("Error InitDB",err)
        
    }
}


initDB().then(()=>{
    app.listen(PORT,()=>{
    console.log(`Serer is Runnig on Port: ${PORT} `)
})
})

