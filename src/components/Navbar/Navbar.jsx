import React  from 'react';
import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

const Navbar =() =>{

    return (
      <nav className={styles.nav} >
      <div className={`${styles.item} ${styles.active}`}><NavLink to='/profile'  className = { navData => navData.isActive ? styles.active : styles.item }>Profile</NavLink></div>
      <div className={styles.item}><NavLink to='/massage' className = { navData => navData.isActive ? styles.active : styles.item }>massages</NavLink></div>
      <div className={styles.item}><NavLink to='/News' className = { navData => navData.isActive ? styles.active : styles.item }>News</NavLink></div>
      <div className={styles.item}><NavLink to='/Music' className = { navData => navData.isActive ? styles.active : styles.item }>Music</NavLink></div>
      <div className={styles.item}><NavLink to='/Settings' className = { navData => navData.isActive ? styles.active : styles.item }>Settings</NavLink></div>
    </nav>
    )
}

export default Navbar;