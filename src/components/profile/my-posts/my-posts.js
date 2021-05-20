import React from 'react';
import Post from '../post/post';


const MyPosts = (props) => {
    let postItem = props.posts.map(post => <Post id={post.id} massage={post.post}/>);

    let newPost = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }
    
    let onPostChange = () => {
        let text = newPost.current.value;
        let action = {type: 'APDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    }

    return (
        <div>
           My posts
           <div>
               <textarea onChange={onPostChange} ref={newPost} value={props.newPostText} />
               <button onClick={addPost}>Add post</button>
           </div>
           <div>
               {postItem}
           </div>
        </div>
    )
}


export default MyPosts;