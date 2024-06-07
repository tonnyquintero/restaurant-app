"use client";
import styles from "./page.module.css";
import Hero from "../../components/Hero/Hero";

export default function Home() {
  return (
    <body className={styles.container}>
      <Hero />
    </body>
  )
}
