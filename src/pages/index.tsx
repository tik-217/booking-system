// react/next
import React, { MutableRefObject, useState } from "react";
import Head from "next/head";

// style
import styles from "@/styles/Home.module.scss";

// components
import Header from "@/components/parts/Home/Header";
import PopularDirections from "@/components/parts/Home/PopularDirections";
import TopHotels from "@/components/parts/Home/TopHotels";
import TravelersBlog from "@/components/parts/Home/TravelersBlog";
import Footer from "@/components/parts/Home/Footer";

export default function Home() {
  const [nextScreen, setNextScreen] = useState<MutableRefObject<null>>();

  function catcherNextScreen(value: MutableRefObject<null>) {
    setNextScreen(value);
  }

  return (
    <>
      <Head>
        <title>Mrava Sar - Онлайн бронирование отелей</title>
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
