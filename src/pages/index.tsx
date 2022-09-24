import type { NextPage } from "next";
import Head from "next/head";
import { NavBar } from "../components";
import { Hero } from "../components/Landing";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <div className="">
      <NavBar />
      <Hero />
    </div>
  );
};

export default Home;
