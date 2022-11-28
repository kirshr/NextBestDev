import Head from "next/head";

import { LandingPageHeader } from "../components/headers";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="find the next best react developer for your business. Next Best Dev gives you access to North Americas largest pool of React Developers."
        />{" "}
        <title>Next Best Dev</title>
      </Head>
      <LandingPageHeader />
      <main></main>
    </>
  );
}
