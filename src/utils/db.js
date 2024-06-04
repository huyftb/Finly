import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => {
  return new PrismaClient()
}
const globalThis = typeof global !== 'undefined' ? global : window;
// const prisma2 = globalThis.prismaGlobal ? globalThis.prismaGlobal : prismaClientSingleton();
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()


if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma
// Pervent client overflow (10 user limit)

export const db = prisma;