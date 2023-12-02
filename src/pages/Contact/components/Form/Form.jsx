import styles from "./form.module.css"

function Form () {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          <h5>Horario de atención</h5>
          <span>Luneas a lunes de 9 a 14 hs. y de 19 a 24 hs.</span>
        </div>
        <div>
          <h5>Dirección</h5>
          <span>Sebastián Vázquez 90 - Paraná, Entre Ríos</span>
        </div>
        <div>
          <h5>Teléfono</h5>
          <span>3434656565</span>
        </div>
        <div>
          <h5>Correo electrónico</h5>
          <span>correoejemplo@hotmail.com</span>
        </div>
        <div>
          <h5>Formas de pago</h5>
          <span>Efectivo y transferencias</span>
        </div>
      </div>
      <form className={styles.form}>
        <label>
          
          <input type="text" placeholder="Nombre y apellido"/>
        </label>
        <label>
          
          <input type="number" placeholder="Teléfono"/>
        </label>
        <label>
          
          <input type="email" placeholder="Email"/>
        </label>
        <label>
          
          <textarea placeholder="Escribe tu comentario aquí..."/>
        </label>
        <button>Enviar</button>
      </form>
    </div>
  )
}
export default Form