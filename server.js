const fastify = require('fastify')({logger: true})
const path = require('node:path')

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public')
})

// Route to serve the index.html file
fastify.get('/', function (req, reply) {
  reply.sendFile('index.html') // Fastify's reply.sendFile automatically resolves the path relative to the root
})

// Start the Fastify server
fastify.listen({ port: 3000 }, (err, address) => {
	if (err) throw err
	// Server is now listening on ${address}
  })
