import Friends from "./friends";
import {connect} from "react-redux";

let GetStateToProps = (state) => {
    return {
        friends: state.sideBar
    }
}
const FriendsContainer = connect (GetStateToProps) (Friends)
export default FriendsContainer;