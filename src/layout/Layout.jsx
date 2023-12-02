import Header from "../components/Header/Header"
import styles from "./layout.module.css"

// eslint-disable-next-line react/prop-types
function Layout ({children}) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  )
}

export default Layout