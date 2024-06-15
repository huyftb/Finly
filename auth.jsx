import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import {db} from "@lib/db"
import { getUserById } from "./schemas/user"


export const { auth, handlers: { GET, POST }, signIn, signOut } = NextAuth({
  pages:{
    signIn: "/login",
    error: "/error",
    verifyRequest: "/login",
  },
  site: process.env.NEXTAUTH_URL,
  trustHost: true,
  trustHostedDomain: true,
  callbacks: {
    
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
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.role = existingUser.role;
      return token
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt", },
    ...authConfig

})

