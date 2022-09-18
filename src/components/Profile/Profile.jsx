import React  from 'react';
import MyPosts from './MyPosts/myPosts';
import styles from './Profile.module.css'

const Profile =() =>{

    return (
      <div className={styles.contect}>
        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ums6Rp3LJDJZ4ClL81ZAa1x7Jos8YVCdKg&usqp=CAU' />
        </div>

        <div>
          ava+des
        </div>
        <MyPosts />
      
      </div>
    )
}

export default Profile;