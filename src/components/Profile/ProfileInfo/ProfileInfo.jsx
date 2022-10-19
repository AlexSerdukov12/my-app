import React  from 'react';
import styles from './ProfileInfo.module.css'

const ProfileInfo =(props) =>{

    return (
      <div className={styles.profileInfo}>
        <div className={styles.profileImage}>
        <img src='https://scontent.ftlv6-1.fna.fbcdn.net/v/t31.18172-8/15732609_1536648376362529_4274014213660712662_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l6xiEaw8yaMAX8c9ROO&_nc_ht=scontent.ftlv6-1.fna&oh=00_AT8y1xPMVnPIQdPcFowvgWKzDcezlWw7tOpCsYbqPxerqQ&oe=63776E04' />
        </div>

        <div className={styles.descriptionBlock}>
          ava+des
        </div>
      
      </div>
    )
}

export default ProfileInfo;