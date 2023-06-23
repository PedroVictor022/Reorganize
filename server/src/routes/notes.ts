import { FastifyInstance } from "fastify";
import { prisma } from "../database/prisma";
import { z } from "zod";

export async function notesRoutes(app: FastifyInstance) {
  app.get("/notes", async () => {
    const notes = await prisma.notes.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
    return notes;
  });
  app.get("/notes/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });
    const { id } = paramsSchema.parse(request.params);
    const users = await prisma.user.findMany();
    return users;
  });
  app.post("/notes", async () => {
    const users = await prisma.user.findMany();
    return users;
  });
  app.put("/notes/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });
    const bodySchema = z.object({
      title: z.string().optional(),
      content: z.string().optional(),
    });

    const { id } = paramsSchema.parse(request.params);
    const { title, content } = bodySchema.parse(request.body);
    const updateNote = await prisma.notes.update({
      where: {
         id
      },
      data: {
         title: title,
         content: content
      }
    })
    return updateNote;
  });
  app.delete("/notes/:id", async () => {
    const users = await prisma.user.findMany();
    return users;
  });
}
