import {GET_COMMENT} from '../Constant/actionTypes'
import {EDIT_PROFILE} from '../Constant/actionTypes'
import {SAVE_TRANSACTION, STORE_BANDWIDTH} from '../Constant/actionTypes'
import {ACCOUNT} from '../Constant/Account'
const detailTweetInitialState = {
    name : '',
    amount : "0",
    sequence : '0',
    bandwidth: '0',
    update : true,
    tweet : [
        // {
        //     time : "00:44 PM",
        //     content : "Citizen",
        //     comment : [
        //         {
        //             image : "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
        //             name: "test01",
        //             content: "Gastropub cardigan jean shorts, kogi Godard PBR&B lo-fi locavore. Organic chillwave vinyl Neutra. Bushwick Helvetica cred freegan, crucifix Godard craft beer deep v mixtape cornhole Truffaut master cleanse pour-over Odd Future beard. Portland polaroid iPhone.",
        //             date : "19/05/2018",
        //             time : "03:04 AM"
        //         },
        //         {
        //             image : "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
        //             name: "test02",
        //             content: "Samsung Galaxy S7 edge is better than Iphone 6s PLus .That 's like ManCity has more good player than Barca has",
        //             date : "02/12/2018",
        //             time : "17:44 PM"
        //         }
        //     ],
            

        // },
        // {
        //     time : "17:44 PM",
        //     content : "test02",
        //     comment : [
        //         {
        //             image : "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
        //             name: "test01",
        //             content: "Gastropub cardigan jean shorts, kogi Godard PBR&B lo-fi locavore. Organic chillwave vinyl Neutra. Bushwick Helvetica cred freegan, crucifix Godard craft beer deep v mixtape cornhole Truffaut master cleanse pour-over Odd Future beard. Portland polaroid iPhone.",
        //             date : "19/05/2018",
        //             time : "03:04 AM"
        //         },
        //         {
        //             image : "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
        //             name: "test02",
        //             content: "Samsung Galaxy S7 edge is better than Iphone 6s PLus .That 's like ManCity has more good player than Barca has",
        //             date : "02/12/2018",
        //             time : "17:44 PM"
        //         }
        //     ],
           
            
        // },
    
    ]
    
}
const detailTweetReducer = (state = detailTweetInitialState, action) => {
    switch (action.type) {
        case STORE_BANDWIDTH:
            return {...state, bandwidth: action.bandwidth}
        case GET_COMMENT:
            return state.comment
        case EDIT_PROFILE :
            return {...state,name:action.name,location:action.location}
        case SAVE_TRANSACTION:{
            let amount = 0;
            let str = '';
            let firstName = 0;
            let firstSequence = 0;
            let sequence = 0;
            action.res.map((res)=>{
                if(res.operation == "payment"){
                    if(res.params.address === ACCOUNT){
                        amount+= res.params.amount;
                    }  
                    if(res.account === ACCOUNT){
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
        default:
            return state
    }
}
export default detailTweetReducer;