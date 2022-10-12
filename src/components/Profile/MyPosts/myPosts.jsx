import React  from 'react';
import styles from './myPosts'
import Post from './Post/Post';
const MyPosts =(props) =>{

    return (
      <div>
      my posts
      <div>
        <textarea></textarea>
        <button>add Post</button>``
      </div>
      
      <div className={styles.posts}>
        <Post message="Hello"/>
        <Post message="Bye"/>


      </div>
    </div>
    )
}

export default MyPosts;