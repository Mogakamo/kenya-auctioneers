import Hero from "@/components/landing/Hero";
import Products from "@/components/landing/Products";
import PrimaryLayout from "@/components/layout/PrimaryLayout";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <PrimaryLayout>
      <Head>
        <title>Kenya Auctioneers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Products />
    </PrimaryLayout>
  );
};

export default Home;
