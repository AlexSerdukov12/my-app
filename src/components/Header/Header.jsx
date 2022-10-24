import React  from 'react';
import styles from './Header.module.css'
const url = require('../../files/Green Garden.png');

const Header =(props) =>{

    return (
        <header className={styles.header}>
        <img src={url} />
      </header>
    )
}

export default Header;