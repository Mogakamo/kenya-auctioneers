import { AuthLayout } from "../../components/Layouts";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FormInput } from "../../components/forms";
import FileUpLoader from "../../components/forms/FileUpload";
import Loading from "../../components/Reusables/Loaders/LoadingButton";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CreateBidderInput,
  createBidderSchema,
} from "../../schema/bidder.schema";
import { trpc } from "../../utils/trpc";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Register() {
  const router = useRouter();

  const methods = useForm<CreateBidderInput>({
    resolver: zodResolver(createBidderSchema),
  });

  const { isLoading, mutate: RegisterBidder } = trpc.useMutation(
    ["bidder.register-bidder"],
    {
      onSuccess: (data) => {
        toast.success("Registration successful");
        router.push("/bidder/login");
      },
      onError: (error) => {
        toast.error(error.message);
        type: "error";
        position: "top-right";
      },
    }
  );

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

 const onSubmitHandler: SubmitHandler<CreateBidderInput> = (values) => {
    RegisterBidder(values);
  }

  return (
    <AuthLayout>
      <h1 className="font-bold text-2xl">Register as Bidder</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmitHandler)} className="flex items-center flex-col">
          <FormInput label="Full Name" name="name" />
          <FormInput label="Email" name="email" type="email" />

          <FormInput label="Password" name="password" type="password" />
          <FormInput
            label="Confirm Password"
            name="passwordConfirm"
            type="password"
          />
          <FileUpLoader name="photo" />
          <Loading
             loading={isLoading}
            textColor="text-white"
          >
            Sign Up
          </Loading>
        </form>
        <span className="mt-2">
          Already have an account?{" "}
          <Link href="/bidder/login" className="text-green-600">
          <span className="text-green-600 cursor-pointer">Login here</span>
          </Link>
        </span>
      </FormProvider>
    </AuthLayout>
  );
}
