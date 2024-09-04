import React from "react";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/page";
import FirstPage from "./components/FirstPage/page";
import SecondPage from "./components/SecondPage/page";
import ThirdPage from "./components/ThirdPage/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </main>
  );
}
