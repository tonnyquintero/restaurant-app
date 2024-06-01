import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <div className={styles.item}><Image className={styles.img} src="/img4.png" alt="food" width={250} height={300} /></div>
        <div className={styles.item}><Image className={styles.img} src="/img7.png" alt="food" width={250} height={300} /></div>
        <div className={styles.item}><Image className={styles.img} src="/img3.png" alt="food" width={250} height={300} /></div>
        <div className={styles.item}><Image className={styles.img} src="/img2.png" alt="food" width={250} height={300} /></div>
        <div className={styles.item}><Image className={styles.img} src="/img5.png" alt="food" width={250} height={300} /></div>
        <div className={styles.item}><Image className={styles.img} src="/img6.png" alt="food" width={250} height={300} /></div>
        <div className={styles.item}><Image className={styles.img} src="/img7.png" alt="food" width={250} height={300} /></div>
      </div>
    </main>
  );
}
