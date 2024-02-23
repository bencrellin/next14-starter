import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"

const Navabar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Ben Crellin</Link>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Navabar