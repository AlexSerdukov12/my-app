import React  from 'react';
import styles from './Myposts.module.css'

import Post from './Post/Post';
const MyPosts =(props) =>{
  

    return (
      <div className={styles.postBlock}>
      <h3>MY POSTS</h3>
      <div>
      
        <div className={styles.textArea}>
        <textarea>Some Text</textarea>
        </div>

        <div className={styles.button}>
        <button>add Post</button>
        </div>
      </div>
      
      <div className={styles.posts}>
        <Post message="Hello" LikeCount='0'/>
        <Post message="Bye" LikeCount='5'/>


      </div>
    </div>
    )
}

export default MyPosts;