import React from 'react';
import Post from '../post/post';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profile-reducer';

const MyPosts = (props) => {
    let postItem = props.posts.map(post => <Post id={post.id} massage={post.post}/>);
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <div>
           My posts
           <div>
               {postItem}
           </div>
           <div>
               <textarea onChange={onPostChange}  value={props.newPostText} />
               <button onClick={addPost}>Add post</button>
           </div>
        </div>
    )
}


export default MyPosts;