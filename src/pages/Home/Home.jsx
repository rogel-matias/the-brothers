import Hero from "./Hero/Hero"
import styles from "./home.module.css"

function Home () {
  return (
    <section className={styles.container}>
      <Hero />
    </section>
  )
}
export default Home