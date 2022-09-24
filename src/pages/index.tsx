import type { NextPage } from "next";
import Head from "next/head";
import { NavBar } from "../components";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <div className="">
      <NavBar/>
    </div>
  );
};

export default Home;

