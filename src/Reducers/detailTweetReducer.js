import {GET_COMMENT} from '../Constant/actionTypes'
const detailTweetInitialState = {
    comment : [
        {
            image : "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
            name: "test01",
            content: "Gastropub cardigan jean shorts, kogi Godard PBR&B lo-fi locavore. Organic chillwave vinyl Neutra. Bushwick Helvetica cred freegan, crucifix Godard craft beer deep v mixtape cornhole Truffaut master cleanse pour-over Odd Future beard. Portland polaroid iPhone.",
            date : "19/05/2018",
            time : "03:04 AM"
        },
        {
            image : "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
            name: "test02",
            content: "Samsung Galaxy S7 edge is better than Iphone 6s PLus .That 's like ManCity has more good player than Barca has",
            date : "02/12/2018",
            time : "17:44 PM"
        }
    ]
}
const detailTweetReducer = (state = detailTweetInitialState, action) => {
    switch (action.type) {
        case GET_COMMENT:
            return state.comment
        default:
            return state
    }
}
export default detailTweetReducer;