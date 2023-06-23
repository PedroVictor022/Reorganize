import fastify from "fastify";
import { notesRoutes } from "./routes/notes";

const app = fastify();
app.register(notesRoutes)

app.listen({
   port: 3333,
})
.then(() => {
   console.log(`Server is running on http://localhost:3333`);
})