import { FastifyInstance } from "fastify";
import { prisma } from "../database";
import { z } from "zod";

export async function NotationRoutes(app: FastifyInstance) {
   app.get('/notes', async (request) => {
      await request.jwtVerify()
      const notes = await prisma.notes.findMany({
         orderBy: {
            createdAt: 'asc'
         },
      })
      return notes.map((note) => {
         return {
            id: note.id,
            content: note.content.substring(0, 80).concat("...")
         }
      })
   }) 
   app.get('/notes/:id', async (request) => {
      const paramsSchema = z.object({
         id: z.string().uuid(),
      })
      // Pega o request e valida em cima do paramsSchema
      const { id } = paramsSchema.parse(request.params)
   })
}