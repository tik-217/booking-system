// react/next
import React, { MutableRefObject, useState } from "react";
import Head from "next/head";

// style
import styles from "../styles/Home.module.scss";

// components
import Header from "@/components/prarts/Home/Header";
import PopularDirections from "@/components/prarts/Home/PopularDirections";
import TopHotels from "@/components/prarts/Home/TopHotels";
import TravelersBlog from "@/components/prarts/Home/TravelersBlog";
import Footer from "@/components/prarts/Home/Footer";

export default function Home() {
  const [nextScreen, setNextScreen] = useState<MutableRefObject<null>>();

  function catcherNextScreen(value: MutableRefObject<null>) {
    setNextScreen(value);
  }

  return (
    <>
      <Head>
        <title>Mrava Sar - Онлайн бронирование отелей</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header nextScreen={nextScreen} />
      <main className={styles.main}>
        <PopularDirections catcherNextScreen={catcherNextScreen} />
        <TopHotels />
        <TravelersBlog />
      </main>
      <Footer />
    </>
  );
}
