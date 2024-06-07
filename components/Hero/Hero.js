import React from 'react'
import Image from "next/image";
import styles from '../Hero.module.css'


const Hero = () => {

  // CODIGO QUE SI FUNCIONA EN JS SIN NEXT
  // let prev = document.querySelector('.prev')
  // let next = document.querySelector('.next')

  //       next.addEventListener('click', function () {
  //           let items = document.querySelectorAll('.item')
  //           document.querySelector('.box').appendChild(items[0])
  //       })
  //       prev.addEventListener('click', function () {
  //           let items = document.querySelectorAll('.item')
  //           document.querySelector('.box').prepend(items[items.length - 1])
  //       })

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
      <>
    <h1 className={styles.mainTittle}>Bienvenidos a Restaurante Le Blanc</h1>
    <h3 className={styles.subtitle}>Selecciona una de nuestras recomendaciones</h3>
    <section className={styles.recomends}>
        <div className={styles.box}>
                <div className={styles.item}>
                    <a href="https://platzi.com/"><Image alt='food' width={250} height={300} src="/img1.png"/></a>
                </div>   
                <div className={styles.item}>
                    <a href="https://platzi.com/"><Image alt='food' width={250} height={300} src="/img2.png"/></a>
                </div>
                <div className={styles.item}>
                    <a href="https://platzi.com/"><Image alt='food' width={250} height={300} src="/img3.png"/></a>
                </div>
                <div className={styles.item}>
                    <a href="https://platzi.com/"><Image alt='food' width={250} height={300} src="/img4.png"/></a>
                </div>
                <div className={styles.item}>
                    <a href="https://platzi.com/"><Image alt='food' width={250} height={300} src="/img5.png"/></a>
                </div>
                <div className={styles.item}>
                    <a href="https://platzi.com/"><Image alt='food' width={250} height={300} src="/img6.png"/></a>
                </div>
                <div className={styles.item}>
                    <a href="https://platzi.com/"><Image alt='food' width={250} height={300} src="/img7.png"/></a>
                </div>
        </div>

        <div className={styles.newbuttons}>
            <span className={styles.anterior}></span>
            <span className={styles.siguiente}></span>
        </div>

        <div className={styles.buttons}>
            <span className={styles.prev}></span>
            <span className={styles.next}></span>
        </div>
    </section>
<h3 className={styles.fillText}>Disfruta de toda nuestra carta</h3>
<div className={styles.fill}>
        <Image className={styles.fillImage} alt='food' width={250} height={300} src="/img1.png"/>
        <Image className={styles.fillImage} alt='food' width={250} height={300} src="/img2.png"/>
        <Image className={styles.fillImage} alt='food' width={250} height={300} src="/img3.png"/>
        <Image className={styles.fillImage} alt='food' width={250} height={300} src="/img4.png"/>
        <Image className={styles.fillImage} alt='food' width={250} height={300} src="/img5.png"/>
        <Image className={styles.fillImage} alt='food' width={250} height={300} src="/img6.png"/>
        <Image className={styles.fillImage} alt='food' width={250} height={300} src="/img7.png"/>
</div>
      </>
    );
}

export default Hero