import type { NextPage } from "next";
import Head from "next/head";
import { NavBar } from "../components";
import { Hero, Products } from "../components/Landing";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <div className="">
      <NavBar />
      <Hero />
      <div className="py-20 mx-24">
        <Products />
      </div>
    </div>
  );
};

export default Home;
