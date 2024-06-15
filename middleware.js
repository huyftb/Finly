import authConfig from "./auth.config"
import NextAuth from "next-auth"
// export default auth((req) => {
//   // req.auth
// }
import { DEFUALT_LOGIN_AFTER,apiRoute,authRoute,publicRoute } from "./route";
const { auth } = NextAuth(authConfig);
const middleware = (req) => {
  // Your middleware logic here
  
  console.log("Route: ", req.nextUrl.pathname);
  
  const {nextUrl} = req;
  const isLoggin = !!req.auth;
  const isApi = nextUrl.pathname.startsWith(apiRoute);
  const isPublic = publicRoute.includes(nextUrl.pathname);
  const isAuth = authRoute.includes(nextUrl.pathname);

  console.log("Login?", req.auth);

  if(isApi){
    return null;
  }
  if (isAuth) {
    if (isLoggin) {
      return Response.redirect(new URL(DEFUALT_LOGIN_AFTER, nextUrl));
    }
    return null;
  }
  if (!isLoggin && !isPublic) {
    return Response.redirect(new URL("/login", nextUrl));
  }
  return null;

};

export default auth(middleware);




export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}

