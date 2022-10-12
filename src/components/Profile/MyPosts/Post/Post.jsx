import React  from 'react';
import styles from './Post.module.css'
const Post =() =>{

    return (
        <div>

            <div className={styles.item}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_ImaS_qX32yOs7xA8KfC2G0KhqduevErzg&usqp=CAU'/>
                post 1
                <div>
                <span>Like</span>
                </div>
            </div>
        </div>

    )
}

export default Post;