import { Prisma } from "@prisma/client"

export const connectDB = async () => {
    try {
        await Prisma.$connect()
    } catch (error) {
        console.log(error);
        throw new Error("Unable to connect to databbase")
    }
}