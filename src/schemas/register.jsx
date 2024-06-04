"use server"
import {db } from "@utils/db"
import { RegisterSchema } from "./index"
import bcrypt from "bcrypt"


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
                userName: name,
            }
        });
        if (existingUserByName) {
            return {
                error: "Username already exist"
            }
        }

        await db.user.create({
            data: {
                email: email,
                password: hashpass,
                userName: name,
            }
        })
        //send opt email


        return ( { success: "Email create success"})
    }
}