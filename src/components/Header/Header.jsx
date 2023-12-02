import { Link as ScrollLink } from "react-scroll"
import styles from "./header.module.css"

function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.imgContainer}>
        <img />
      </div>
      <nav>
        <ul>
          <li>
            <ScrollLink 
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Inicio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="catalog"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Productos
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="aboutme"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Quienes somos?
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Contacto
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header