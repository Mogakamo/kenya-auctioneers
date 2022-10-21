import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FormInput } from "../../components/forms";
import { AuthLayout } from "../../components/Layouts";
import Loading from "../../components/Reusables/Loaders/LoadingButton";
import {
  LoginUserInput,
  loginUserSchema,
} from "../../schema/user.schema";
import { trpc } from "../../utils/trpc";

export default function Login() {
  const router = useRouter();

  const methods = useForm<LoginUserInput>({
    resolver: zodResolver(loginUserSchema),
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const { isLoading, mutate: loginUser } = trpc.useMutation(
    ["auth.login"],
    {
      onSuccess: (data) => {
        toast.success("Login successful", {
          type: "success",
          position: "top-right",
        });
        router.push("/");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSubmitHandler: SubmitHandler<LoginUserInput> = (values) => {
    loginUser(values);
  };

  return (
    <AuthLayout>
      <h1 className="font-bold text-2xl">user Login</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="space-y-5 flex flex-col"
        >
          <FormInput name="email" label="Email" />
          <FormInput name="password" label="Password" type="password" />
          <Loading loading={isLoading}>Login</Loading>
        </form>
        <span className="mt-2">
          Don't have an account?{" "}
          <Link href="/user/register" className="">
            <span className="text-green-600 cursor-pointer">Register here</span>
          </Link>
        </span>
      </FormProvider>
    </AuthLayout>
  );
}
