"use server"
import { LoginSchema } from "@/schemas/index"
import { z } from "zod"
export const login = async (values) => {
    const validateFields = LoginSchema.safeParse(values)
    if (!validateFields.success) {
        return {
            error: " Invalid field"}
    } else {
        return ( { success: "Email login success"})
    }
}