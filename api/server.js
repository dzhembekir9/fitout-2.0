const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv/config')

const productsRoute = require('./routes/products')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const startServer = async () => {
  const port = process.env.PORT || 5000
  const dbURI = process.env.DB_CONNECTION

  const app = express()
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({ app })

  app.use(bodyParser.json())
  app.use('/products', productsRoute)

  app.get('/', (req, res) => {
    res.json({ message: 'hello' })
  })

  mongoose.connect(
    dbURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log('Connected to database')
  )

  app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
  })
}

startServer()
