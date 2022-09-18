import React  from 'react';
import styles from './myPosts'
import Post from './Post/Post';
const MyPosts =() =>{

    return (
      <div>
      my posts
      <div>
        <textarea></textarea>
        <button>add Post</button>
      </div>
      <div className={styles.posts}>
        <Post/>
       

      </div>
    </div>
    )
}

export default MyPosts;