import React from 'react';
import Post from '../post/post';

const MyPosts = (props) => {
    let postItem = props.profilePage.postsData.map(post => <Post id={post.id} massage={post.post}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostChange(text);
    }
    return (
        <div>
           My posts
           <div>
               {postItem}
           </div>
           <div>
               <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText} />
               <button onClick={addPost}>Add post</button>
           </div>
        </div>
    )
}


export default MyPosts;