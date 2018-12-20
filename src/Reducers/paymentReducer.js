import { OPEN_DIALOG_PAYMENT } from '../Constant/actionTypes';

const paymentInitialState = {
    open:false
}
const paymentReducer = (state = paymentInitialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG_PAYMENT:
            return {...state,open : action.open};
        default:
            return state
    }
}
export default paymentReducer;