import fastify from "fastify";
import cors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";

const app = fastify();
app.register(cors, {
   origin: true
})
app.register(fastifyJwt, {
   secret: 'spacetime'
})

app.listen({
   port: 3333,
}).then(() => {
   console.log(`SERVER WITH RUNNING ON http://localhost:3333`)
})