import styles from "./about.module.css"

function About () {
  return (
    <section className={styles.container}>
      <h2>Quienes somos?</h2>
      <article className={styles.article}>
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Est fugit possimus eligendi explicabo sit veniam nesciunt. 
            Nesciunt laudantium fugiat alias cum a laborum reprehenderit 
            optio, est facere beatae amet rerum. laudantium fugiat alias 
            cum a laborum reprehenderit optio, est facere beatae amet rerum.
          </p>
        </div>
        <img src="/img/about/image2.jpg" alt="imagen sobre nosotros" loading="lazy"/>
      </article>
      <article className={styles.article}>
        <img src="/img/about/image3.jpg" alt="imagen sobre nosotros" loading="lazy"/>
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Est fugit possimus eligendi explicabo sit veniam nesciunt. 
            Nesciunt laudantium fugiat alias cum a laborum reprehenderit 
            optio, est facere beatae amet rerum.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Est fugit possimus eligendi explicabo sit veniam nesciunt. 
            Nesciunt laudantium fugiat alias cum a laborum reprehenderit 
            optio, est facere beatae amet rerum.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Est fugit possimus eligendi explicabo sit veniam nesciunt. 
            Nesciunt laudantium fugiat alias cum a laborum reprehenderit 
            optio, est facere beatae amet rerum.</p>
        </div>
      </article>
      
    </section>
  )
}
export default About