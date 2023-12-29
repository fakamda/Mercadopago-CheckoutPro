import express from 'express'
import cors from 'cors'
import MercadoPagoRouter from './routes/mercadopago.routes.js'


const app = express()

app.use(cors())
app.use(express.json())
app.use("/mercadopago", MercadoPagoRouter)

export default app