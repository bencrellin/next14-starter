import styles from "./footer.module.css";
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Crellin</div>
            <div className={styles.text}>
                Ben Crellin © 2024 All rights reserved.
            </div>
        </div>
    )
}

export default Footer