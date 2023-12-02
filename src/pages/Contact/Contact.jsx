import Form from "./components/Form/Form"
import styles from "./contact.module.css"

function Contact () {
  return (
    <section className={styles.container}>
      <h2>Contacto</h2>
      <Form />
    </section>
  )
}

export default Contact