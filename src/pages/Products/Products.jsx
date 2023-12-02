import Card from "./components/Card/Card"
import styles from "./products.module.css"

function Products () {
  return (
    <section className={styles.container}>
      <h2>Productos</h2>
      <div className={styles.cardContainer}>
        <Card 
          img={"/img/products/image1.webp"}
          title="Menu tradicional"
        />
        <Card 
          img={"/img/products/image2.webp"}
          title="Menu vegetariano"
        />
        <Card 
          img={"/img/products/image3.webp"}
          title="Menu light"
        />
        <Card 
          img={"/img/products/image4.webp"}
          title="Menu del dia"
        />
      </div>
    </section>
  )
}
export default Products