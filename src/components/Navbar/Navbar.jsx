import React  from 'react';
import styles from './Navbar.module.css'

const Navbar =() =>{

    return (
      <nav className={styles.nav}>
      <div className={`${styles.item} ${styles.active}`}>Profile</div>
      <div className={styles.item}>Messeges</div>
      <div className={styles.item}>News</div>
      <div className={styles.item}>Music</div>
      <div className={styles.item}>Settings</div>
    </nav>
    )
}

export default Navbar;