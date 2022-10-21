import React from "react";
import { FormProvider } from "react-hook-form";
import { FormInput } from "../../components/forms";
import { AuthLayout, MainLayout } from "../../components/Layouts";

const Bid = () => {
    const methods = useForm()
  return (
    <AuthLayout>
      <h1>Add your Auction</h1>
      <FormProvider {...methods}>
        <form>
            <FormInput name="" label="Name" />
        </form>
      </FormProvider>
    </AuthLayout>
  );
};

export default Bid;
