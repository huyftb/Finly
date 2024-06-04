import { db } from "@/utils/db";
import { connectDB } from "@/utils/dbConnect";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";


export const POST = async (req) => {
    try {
        const body = await req.json();
        const { username, email, password } = body;
        if (!username || !email || !password) {
            return NextResponse.json({ message: "Missing data" }, { status: 422 });
        }

        await connectDB()
        
        const newUser = await Prisma.user.create({
            data: {
                username,
                email,
                password,
            },
        });

        const exitEmail = await Prisma.user.findUnique({
            where: {
                email,
            },
        });


        return NextResponse.json(body)
    } catch (error) {
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    } finally {
        await Prisma.$disconnect()
    }
}