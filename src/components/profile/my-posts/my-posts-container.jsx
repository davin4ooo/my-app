import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./my-posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostChange: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        }
    }
}
const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);
export default MyPostsContainer;