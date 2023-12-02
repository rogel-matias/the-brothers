import styles from "./hero.module.css"

function Hero () {
  return (
    <div className={styles.heroSection}>
      <div className={styles.modal}>
      </div>
      <div className={styles.heroContent}>
        <h1>Título Destacado</h1>
        <p>Descripción breve de tu página web.</p>
        <a href="#cta" className={styles.ctaButton}>
          ¡Accede ahora!
        </a>
      </div>
    </div>
  )
}

export default Hero