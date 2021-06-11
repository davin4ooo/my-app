import React from 'react';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./my-posts";
import StoreContext from "../../../store-context";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                store.dispatch(addPostActionCreator());
            }
                let onPostChange = (text) => {
                store.dispatch(updateNewPostTextActionCreator(text));
            }
                return <MyPosts
                addPost={addPost}
                updateNewPostChange={onPostChange}
                newPostText={state.profilePage.newPostText}
                posts={state.profilePage.postsData}/>}
            }

        </StoreContext.Consumer>
    )
}


export default MyPostsContainer;