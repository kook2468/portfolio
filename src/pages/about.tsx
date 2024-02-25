import { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Abount</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>About 페이지</p>
      </main>
    </div>
  );
};

export default About;
