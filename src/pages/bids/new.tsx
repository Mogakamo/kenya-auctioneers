import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FormInput } from "../../components/forms";
import { AuthLayout, MainLayout } from "../../components/Layouts";
import { AddBidInput, addBidSchema } from "../../schema/bid.schema";
import { trpc } from "../../utils/trpc";
import Loading from "../../components/Reusables/Loaders/LoadingButton";
import FileUpLoader from "../../components/forms/FileUpload";

const Bid = () => {
  const methods = useForm<AddBidInput>({
    resolver: zodResolver(addBidSchema),
  });
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { isSubmitSuccessful },
  } = methods;

  const { mutate, error } = trpc.useMutation(["bids.add-bid"], {
    onSuccess: ({ id }) => {
      router.push(`/bids/${id}`);

    },
    onError: (err) => {
      console.log(err);
    }
  });

  const onSubmit: SubmitHandler<AddBidInput> = (values) => {
    mutate(values);
  }

  return (
    <AuthLayout>
      <h1>Add your Auction</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-10 mb-3">
            <div className="right">
              <FormInput name="name" label="Name" />
              <FormInput name="description" label="Description" />
              <FormInput name="price" label="Starting Price" />
              <FormInput name="category" label="Category" />
            </div>
            <div className="left">
              <FileUpLoader name="img" />
              <FormInput name="bidEnd" label="Bid ends in" type="time" />
              <FormInput name="bidStart" label="Bid starts in" type="time" />
              <FormInput name="bidStatus" label="Bid status" />
            </div>
            <FormInput name="brand" label="brand" />
          </div>
          <Loading loading={false}>Add Bid</Loading>
        </form>
      </FormProvider>
    </AuthLayout>
  );
};

export default Bid;
function handleSubmit(
  onSubmit: any
): React.FormEventHandler<HTMLFormElement> | undefined {
  throw new Error("Function not implemented.");
}
