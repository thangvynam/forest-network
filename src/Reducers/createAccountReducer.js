import {OPEN_DIALOG_CREATE_ACCOUNT} from '../Constant/actionTypes'
import {OPEN_DIALOG_SHOW_INFO} from '../Constant/actionTypes'

const createAccountInitialState = {
    openDialog: false,
    openDialogShowInfo :false,
    createdPublicKey : '',
    creadtedSecretKey : ''
}
const createAccountReducer = (state = createAccountInitialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG_CREATE_ACCOUNT:
            return {...state,openDialog:action.openDialog};
        case OPEN_DIALOG_SHOW_INFO:{
            return {...state,openDialogShowInfo:action.openDialogShowInfo,openDialog:action.openDialog,
                createdPublicKey:action.createdPublicKey,creadtedSecretKey:action.creadtedSecretKey};
        }
        default:
            return state
    }
}
export default createAccountReducer;