"use server"
import { LoginSchema } from "@/schemas/index"
import { signIn } from "@/auth"
import { DEFUALT_LOGIN_AFTER } from "@/route"
import { AuthError } from "next-auth"

export const login = async (values) => {
    const validateFields = LoginSchema.safeParse(values)
    if (!validateFields.success) {
        return {
            error: " Invalid field"}
    } 
    const { email, password } = validateFields.data;
    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFUALT_LOGIN_AFTER,
        })
    } catch (error) {
        if (error instanceof AuthError) {
            // console.log("Type of Error: ",error.type)
            switch (error.type){
                case "CredentialsSignin": 
                    return {          
                        error: "Invalid Credentials!"

                    }
                case "CallbackRouteError":
                    return {
                        error: "Callback route error"
                    }
                default:
                    return {
                        error: "Unknown error???"
                    }
            }
        }
        throw error;
    }
    return ( { success: "Email login success"})
}
export async function doSocialLogin(formdata) {
    const action = formdata.get("action");
    await signIn(action, {
        redirectTo: DEFUALT_LOGIN_AFTER,
    });
    console.log(action)
}