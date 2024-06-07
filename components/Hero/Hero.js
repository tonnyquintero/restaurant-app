import { useEffect, useRef } from 'react';
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

  const boxRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const prev = prevRef.current;
    const next = nextRef.current;
    const box = boxRef.current;

    console.log('Prev:', prev);
    console.log('Next:', next);
    console.log('Box:', box);

    // Función para mover el primer item al final
    const handleNextClick = () => {
      const items = box.querySelectorAll('.' + styles.item);
      if (items.length > 0) {
        box.appendChild(items[0]);
      }
      console.log('Next button clicked');
    };

    // Función para mover el último item al inicio
    const handlePrevClick = () => {
      const items = box.querySelectorAll('.' + styles.item);
      if (items.length > 0) {
        box.prepend(items[items.length - 1]);
      }
      console.log('Prev button clicked'); 
    };

    // Agregar event listeners
    next.addEventListener('click', handleNextClick);
    prev.addEventListener('click', handlePrevClick);

    // Limpiar los event listeners al desmontar el componente
    return () => {
      next.removeEventListener('click', handleNextClick);
      prev.removeEventListener('click', handlePrevClick);
    };
  }, []);

  return (
      <>
    <h1 className={styles.mainTittle}>Bienvenidos a Restaurante Le Blanc</h1>
    <h3 className={styles.subtitle}>Selecciona una de nuestras recomendaciones</h3>
    <section className={styles.recomends}>
        <div ref={boxRef} className={styles.box}>
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

        {/* <div className={styles.newbuttons}>
            <span className={styles.anterior}></span>
            <span className={styles.siguiente}></span>
        </div> */}

        <div className={styles.buttons}>
            <span ref={prevRef} className={styles.prev}></span>
            <span ref={nextRef} className={styles.next}></span>
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