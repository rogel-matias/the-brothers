import styles from "./card.module.css"

function Card ({ img, title }) {
  return (
    <div className={styles.container}>
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Rerum earum laboriosam quaerat sit minus, quas perspiciatis 
          est pariatur in iure animi minima consequuntur accusamus 
        </p>
      </div>
    </div>
  )
}
export default Card