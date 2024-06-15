import { LoginForm } from "../_components/login-form";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
