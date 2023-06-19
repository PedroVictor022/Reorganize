import { FastifyRequest } from 'fastify'
declare module 'fastify' {
   export interface FastifyInstance {
      user: {
         sub: string
         name: string
         avatarUrl: string
      }
   }
}