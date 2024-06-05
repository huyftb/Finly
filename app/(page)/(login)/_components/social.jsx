"use client";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { doSocialLogin } from "@/schemas/login";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";
import { DEFUALT_LOGIN_AFTER } from "@/route";

export const Social = () => {
  // const onClick = (provider) => {
  //   signIn(provider, {
  //     callbackURL: DEFUALT_LOGIN_AFTER,
  //   });
  // };
  return (

      <form action={doSocialLogin} className="flex w-full items-center gap-x-2">
        <Button
          size="lg"
          className={"w-full"}
          variant="outline"
          type="submit"
          name="action"
          value="google"
          // onClick={() => console.log("google")}
        >
          <FcGoogle className="w-6 h-6" />
        </Button>
        <Button
          size="lg"
          className={"w-full"}
          variant="outline"
          type="submit"
          name="action"
          value="facebook"
          // onClick={() => console.log("facebook")}
        >
          <FaFacebook className="w-6 h-6" />
        </Button>
        <Button
          size="lg"
          className={"w-full"}
          variant="outline"
          type="submit"
          name="action"
          value="github"
          // onClick={() => console.log("github")}
        >
          <FaGithub className="w-6 h-6" />
        </Button>
      </form>
  );
};
