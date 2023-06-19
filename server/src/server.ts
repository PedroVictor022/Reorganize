import fastify from "fastify";
import cors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import { NotationRoutes } from "./routes/notations";

const app = fastify();
app.register(cors, {
   origin: true
})
app.register(fastifyJwt, {
   secret: 'reorganize'
})
app.register(NotationRoutes)

app.listen({
   port: 3333,
}).then(() => {
   console.log(`SERVER WITH RUNNING ON http://localhost:3333`)
})