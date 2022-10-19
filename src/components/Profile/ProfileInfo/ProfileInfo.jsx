import React  from 'react';
import styles from './ProfileInfo.module.css'

const ProfileInfo =(props) =>{

    return (
      <div className={styles.profileInfo}>
        <div className={styles.profileImage}>
          img
        </div>

        <div className={styles.descriptionBlock}>
          ava+des
        </div>
      
      </div>
    )
}

export default ProfileInfo;