/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import Grid from "./components/Grid";
import Stack from "./components/Stack";
import { getPages } from "./queries/pages";

const inter = Inter({ subsets: ["latin"] });

const Home: FC<{
  grid: {
    items: {
      title: string;
      description: string;
    }[];
  };
  stack: {
    items: {
      title: string;
      description: string;
    }[];
  };
}> = ({ grid, stack }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`${styles.header} ${inter.className}`}>
        <nav className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/">Products</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Recipes</Link>
        </nav>
      </header>
      <main className={`${styles.main} ${inter.className}`}>
        <Grid items={grid.items} />
        <Stack items={stack.items} />
      </main>
      <footer className={`${styles.footer} ${inter.className}`}>
        © 2023 - All rights reserved.
      </footer>
    </>
  );
};

export const getServerSideProps = async () => {
  const hygraph = new GraphQLClient(
    process.env.NEXT_PUBLIC_HYGRAPH_API_URL || "",
    {
      headers: {
        authorization: process.env.NEXT_PUBLIC_HYGRAPH_API_TOKEN || "",
      },
    }
  );

  const data: { pages: any } = await hygraph.request(getPages());

  return {
    props: {
      grid: data?.pages[0].components[0],
      stack: data?.pages[0].components[1],
    },
  };
};

export default Home;
