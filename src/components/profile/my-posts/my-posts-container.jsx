import React from 'react';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./my-posts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <MyPosts
            addPost={addPost}
            updateNewPostChange={onPostChange}
            newPostText={state.profilePage.newPostText}
            posts={state.profilePage.postsData}/>
    )
}


export default MyPostsContainer;