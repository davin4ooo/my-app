import React from 'react';
import MyPosts from './my-posts/my-posts'
import ProfileInfo from './profileInfo/profileInfo'


const Profile = (props) => {
    
    return (
        <div>
            <ProfileInfo/>  
            <MyPosts 
            posts={props.profilePage.postsData} 
            newPostText={props.profilePage.newPostText} 
            dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;