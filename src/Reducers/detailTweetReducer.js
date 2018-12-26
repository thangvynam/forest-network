import {GET_COMMENT} from '../Constant/actionTypes'
import {EDIT_PROFILE,UPDATE_REAL_TIME,SAVE_TRANSACTION_NEWSFEED} from '../Constant/actionTypes'
import {SAVE_TRANSACTION, STORE_BANDWIDTH,SAVE_PUBLIC_KEY,SAVE_COMMENT} from '../Constant/actionTypes'


const detailTweetInitialState = {
    name : '',
    amount : "0",
    sequence : '0',
    bandwidth: '0',
    update : true,
    public_key: '',
    tweet : [],
    tweetNewsfeed : [],
    comment: '',
}
const detailTweetReducer = (state = detailTweetInitialState, action) => {
    switch (action.type) {
        case STORE_BANDWIDTH:
            return {...state, bandwidth: action.bandwidth}
        case GET_COMMENT:
            return state.comment
        case EDIT_PROFILE :
            return {...state,name:action.name,location:action.location}
        case UPDATE_REAL_TIME:
            return {...state,update:action.update}
        case SAVE_PUBLIC_KEY:
            return {...state,public_key:action.public_key}
        case SAVE_COMMENT:
            return {...state, comment: action.comment}
        case SAVE_TRANSACTION:{
            let str = '';
            let firstName = 0;
            let firstSequence = 0;
            let sequence = 0;
            let amount = 0;
            action.res.map((res)=>{
                if(res.operation == "payment"){
                    if(res.params.address === state.public_key){
                        amount+= res.params.amount;
                    }  
                    if(res.account === state.public_key){
                        amount-= res.params.amount;
                    }
                }
                if(firstName === 0 && res.operation === "update_account" && res.params.key === "name"){
                   
                    let data = res.params.value;
                    let buf = Buffer.from(data);
                    str = buf.toString('utf8');      
                    firstName++;   
                }
                if(firstSequence === 0){
                    sequence = res.sequence;
                    firstSequence++;
                }
            })
            return {...state,tweet:action.res,amount:amount,name:str,sequence:sequence}
           
        }
        case SAVE_TRANSACTION_NEWSFEED:{
            return {...state,tweetNewsfeed:action.res}
        }
        
        default:
            return state
    }
}
export default detailTweetReducer;