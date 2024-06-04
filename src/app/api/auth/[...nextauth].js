import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter"
import {GitHub} from "next-auth/providers/github"
import { Facebook } from "next-auth/providers/facebook";



const prisma = new PrismaClient()

export const authOptions = {
  
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: 1, name: "Huy", email: "huyftb@gmail.com", password: "123456"};
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};



export default NextAuth(authOptions);