"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const handlePrevClick = () => {
    let prev = document.querySelector('button')
    prev.addEventListener('click', function () {
      let items = document.querySelectorAll('div');
      document.querySelector('section').appendChild(items[0])

    })
  }
  const handleNextClick = () => {
    let prev = document.querySelector('button')
    prev.addEventListener('click', function () {
      let items = document.querySelectorAll('div');
      document.querySelector('section').prepend(items[0])

    })
  }

  return (
    <main className={styles.main}>
      <section className={styles.box}>
        <div className={styles.item}><Image className={styles.img} src="/img7.png" alt="food" width={250} height={300} /></div>
        <div className={styles.item}><Image className={styles.img} src="/img6.png" alt="food" width={250} height={300} /></div>
        <div className={styles.item}><Image className={styles.img} src="/img5.png" alt="food" width={250} height={300} /></div>
        <div className={styles.item}><Image className={styles.img} src="/img1.png" alt="food" width={250} height={300} /></div>
        <div className={styles.item}><Image className={styles.img} src="/img3.png" alt="food" width={250} height={300} /></div>
        <div className={styles.item}><Image className={styles.img} src="/img4.png" alt="food" width={250} height={300} /></div>
        <div className={styles.item}><Image className={styles.img} src="/img2.png" alt="food" width={250} height={300} /></div>
      </section>
      <nav className={styles.buttons}>
      <button className={styles.prev} onClick={handlePrevClick}>Anterior</button>
      <button className={styles.prev} onClick={handleNextClick}>siguiente</button>
      </nav>
    </main>
  );
}
