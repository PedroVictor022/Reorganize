import fastify from "fastify";
import { notesRoutes } from "./routes/notes";
import cors from "@fastify/cors";
import { AuthRoutes } from "./routes/auth";

const app = fastify();
app.register(cors, {
  origin: true
});
app.register(AuthRoutes);
app.register(notesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(`Server is running on http://localhost:3333`);
  });
