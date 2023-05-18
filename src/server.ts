import fastify from "fastify"

const app = fastify()

// GET - listar
// POST - criar
// PUT - atualizar
// PATCH - atualizar uma informação específica
// DELETE - excluir

app.get('/hello', () => {
    return 'Hello World'
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running on http://localhost:3333 ⚡')
})