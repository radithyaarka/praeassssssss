import express from 'express'
import payload from 'payload'

require('dotenv').config()
const cors = require('cors');
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

app.use(cors({
  origin: 'http://localhost:5173', // Replace with your actual frontend origin
  credentials: true,
}));

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(3000)
}

start()
