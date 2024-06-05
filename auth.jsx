import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import {db} from "@lib/db"


export const { auth, handlers: { GET, POST }, signIn, signOut } = NextAuth({
  callbacks: {
    pages: {
      signIn: "/login",
      error: "/error",
    },
    async session({ session, token }) {
      console.log( token)
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      
      const roleUser = await db.user.findUnique({
        where: { email: session.user.email },
        select: { role: true }, })
      session.user.role = roleUser.role

      return session
    },
    async jwt({ token}) {
      if (!token.sub) return token;

      return token
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
    ...authConfig

})

