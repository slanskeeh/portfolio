import Head from "next/head";
import styles from "@/styles/Body.module.sass";

import Header from "@/components/header";
import HomeScreen from "@/screens/home";
import AboutScreen from "@/screens/about";

export default function Home() {
  return (
    <>
      <Head>
        <title>slanskeeh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <main className={styles.main}>
        <HomeScreen />
        <AboutScreen />
      </main>
    </>
  );
}
