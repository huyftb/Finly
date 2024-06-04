import authConfig from "./auth.config"
import NextAuth from "next-auth"
// export default auth((req) => {
//   // req.auth
// })

const middleware = async (req) => {
  // Your middleware logic here
  console.log("Route: ", req.nextUrl.pathname);
};
const { auth } = NextAuth(authConfig);
export default auth(middleware);




export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}

