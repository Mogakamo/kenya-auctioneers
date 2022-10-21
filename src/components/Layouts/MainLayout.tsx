import React, { ReactNode } from "react";
import { trpc } from "../../utils/trpc";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const {} = trpc.useQuery(["users.me"], {
    onSuccess: (data) => {
      console.log(data);
    },
  });
  return <div className="bg-green-500/10 h-screen">
    {children}</div>;
};

export default MainLayout;
