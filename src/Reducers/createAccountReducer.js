import {OPEN_DIALOG_CREATE_ACCOUNT} from '../Constant/actionTypes'
import {OPEN_DIALOG_SHOW_INFO} from '../Constant/actionTypes'
const {
    Keypair
} = require('stellar-base');
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
            const key = Keypair.random();
            
            return {...state,openDialogShowInfo:action.openDialogShowInfo,openDialog:action.openDialog,
                createdPublicKey:key.publicKey(),creadtedSecretKey : key.secret()};
        }
            
        default:
            return state
    }
}
export default createAccountReducer;