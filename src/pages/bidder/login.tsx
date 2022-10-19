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
  LoginBidderInput,
  loginBidderSchema,
} from "../../schema/user.schema";
import { trpc } from "../../utils/trpc";

export default function Login() {
  const router = useRouter();

  const methods = useForm<LoginBidderInput>({
    resolver: zodResolver(loginBidderSchema),
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

  const { isLoading, mutate: loginBidder } = trpc.useMutation(
    ["bidder.login-bidder"],
    {
      onSuccess: (data) => {
        toast.success("Login successful", {
          type: "success",
          position: "top-right",
        });
        router.push("/bidder");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSubmitHandler: SubmitHandler<LoginBidderInput> = (values) => {
    loginBidder(values);
  };

  return (
    <AuthLayout>
      <h1 className="font-bold text-2xl">Bidder Login</h1>
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
          <Link href="/bidder/register" className="">
            <span className="text-green-600 cursor-pointer">Register here</span>
          </Link>
        </span>
      </FormProvider>
    </AuthLayout>
  );
}
