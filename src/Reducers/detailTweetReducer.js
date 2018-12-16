import {GET_COMMENT} from '../Constant/actionTypes'
import {EDIT_PROFILE} from '../Constant/actionTypes'
import {SAVE_TRANSACTION} from '../Constant/actionTypes'

const detailTweetInitialState = {
    name : "Thang Vỹ Nam",
    location : "Unknown",
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
        case GET_COMMENT:
            return state.comment
        case EDIT_PROFILE :
            return {...state,name:action.name,location:action.location}
        case SAVE_TRANSACTION:
            return {...state,tweet:action.res}
        default:
            return state
    }
}
export default detailTweetReducer;