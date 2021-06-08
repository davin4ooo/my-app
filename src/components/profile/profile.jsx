import React from 'react';
import ProfileInfo from './profileInfo/profileInfo'
import MyPostsContainer from "./my-posts/my-posts-container";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>  
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;