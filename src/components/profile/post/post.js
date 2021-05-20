import React from 'react';
import s from './post.module.css'



const Post = (props) => {
    return (
        <div className={s.post}>
            <img href ='https://thumbs.gfycat.com/GleamingResponsibleAstarte-mobile.jpg' alt=''/>
            <span> {props.massage} </span>
        </div>
    )
}

export default Post;