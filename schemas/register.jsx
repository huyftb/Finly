"use server"
import {db } from "@lib/db"
import { RegisterSchema } from "./index"
import bcrypt from "bcryptjs"


export const register = async (values) => {
    const validateFields = RegisterSchema.safeParse(values)
    if (!validateFields.success) {
        return {
            error: " Invalid field"}
    } else {
        const { email, password, name } = validateFields.data;
        const hashpass = await bcrypt.hash(password, 10)
        console.log(validateFields.data);
        const existingUserByEmail = await db.user.findUnique({
            where: {
                email,
            }
        });
        if (existingUserByEmail) {
            return {
                error: "Email already exist"
            }
        }

        const existingUserByName = await db.user.findUnique({
            where: {
                name: name,
            }
        });
        if (existingUserByName) {
            return {
                error: "name already exist"
            }
        }

        await db.user.create({
            data: {
                email: email,
                password: hashpass,
                name: name,
            }
        })
        //send opt email


        return ( { success: "Email create success"})
    }
}