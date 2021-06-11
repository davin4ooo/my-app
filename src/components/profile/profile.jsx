import React from 'react';
import ProfileInfo from './profileInfo/profileInfo'
import MyPostsContainer from "./my-posts/my-posts-container";


const Profile = () => {
    return (
        <div>
            <ProfileInfo/>  
            <MyPostsContainer />
        </div>
    )
}

export default Profile;