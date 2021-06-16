import {addMassageActionCreator, updateNewMassageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMassage: () => {
            dispatch(addMassageActionCreator())
        },
        onMassageChange: (body) => {
            dispatch(updateNewMassageTextActionCreator(body))
        }
    }
}
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs)
export default DialogsContainer;