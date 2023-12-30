import { Router } from 'express'
import mercadopago from 'mercadopago'
import { MP_ACCESS_TOKEN } from '../../config.js'

const router = Router()

mercadopago.configure({
  access_token: MP_ACCESS_TOKEN,
})

router.post('/', async (req, res) => {
  const products = req.body

  try {
    const preference = {
      items: [
        {
          title: products.name,
          unit_price: products.price,
          currency_id: "ARS",
          quantity: products.quantity
        }
      ],

      back_urls: {
        success: 'http://localhost:5173/success',
        failure: 'http://localhost:5173/failure',
      },
      auto_return: 'approved',
    }

    const respuesta = await mercadopago.preferences.create(preference)
    console.log(respuesta)
    res.status(200).json(respuesta.response.init_point)
  } catch (error) {
    console.log(error.message)
    res.status(500).json(error.message)
  }
})

export default router
