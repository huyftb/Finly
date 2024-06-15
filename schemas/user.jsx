"use server"
import { db } from "@/lib/db";

export const getUserByEmail = async (email) => {
  try {
    console.log(email, "email")
    const user = await db.user.findUnique({ 
      where: { 
        email: email 
      } 
    });
    if (!user) {
      return { error: "Don't find any account with that email" };
    }
  
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id) => {
  try {
    const user = await db.user.findUnique({ 
      where: { 
        id: id
      } 
    });

    return user;
  } catch (error) {
    return null;
  }
};
