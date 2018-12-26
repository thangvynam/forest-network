import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { OPEN_DIALOG_FOLLOWING } from '../../Constant/actionTypes';
import { OPEN_DIALOG_FOLLOWER, STORE_FOLLOW } from '../../Constant/actionTypes';
import axios from 'axios';
import { Keypair } from 'stellar-base';

class Follow extends Component {
    state={
        persons:[]
    }
    
    componentDidMount(){
        const secret_key = sessionStorage.getItem("secret_key")
        const key = Keypair.fromSecret(secret_key)
        const public_key = key.publicKey()
        let name = []
        axios.post("/getFollow", {public_key}).then(res => {
            this.props.storeFollow(res.data)
        }).then(()=>{
            let people = [];
            this.props.followReducer.followList.map((id) =>{
                axios.post('/getName',{public_key:id})
                    .then((res)=> {
                        people.push(res.data)
                        this.setState({persons:people}) 
                    })
            })
        })
        

    }

    loadFollow(){
        if(this.props.followReducer.open){
            let result = []
            this.props.followReducer.followList.map((id, index) => {
                result.unshift(
                    <div class="Grid-cell u-size1of2 u-lg-size1of3 u-mb10" data-test-selector="ProfileTimelineUser" role="presentation">
                                    <div class="js-stream-item" role="listitem" data-item-id="96951800" id="stream-item-user-96951800" data-item-type="user">
                                    <div class="ProfileCard js-actionable-user" data-screen-name="FCBarcelona" data-user-id="96951800" data-feedback-token="" data-impression-id="">
                                        <a class="ProfileCard-bg js-nav" href="/FCBarcelona" tabindex="-1" aria-hidden="true" 
                                        // style="background-color: #9B0034; background-image: url(https://pbs.twimg.com/profile_banners/96951800/1530397801/600x200);"
                                        style={{backgroundColor:"#9B0034", backgroundImage: "url(https://pbs.twimg.com/profile_banners/96951800/1530397801/600x200)"}}
                                        >
                                        </a>
    
                                        <div class="ProfileCard-content">
                                            <a class="ProfileCard-avatarLink js-nav js-tooltip" href="/FCBarcelona" title="FC Barcelona" tabindex="-1" aria-hidden="true">
                                                <img class="ProfileCard-avatarImage js-action-profile-avatar" src="https://pbs.twimg.com/profile_images/1013187922319872000/FLg_ZxlR_bigger.jpg" alt=""/>
                                            </a>
        
                                        <div class="ProfileCard-actions">
                                            <div class="ProfileCard-userActions with-rightCaret js-userActions">
                                            <div class="UserActions   UserActions--small u-textLeft">
                                            <div class="user-actions btn-group following not-muting can-dm including " data-user-id="96951800" data-screen-name="FCBarcelona" data-name="FC Barcelona" data-protected="false">
                                                <span class="UserActions-moreActions u-inlineBlock">
                                                    <button type="button" class="js-tooltip unmute-button btn small plain-btn" title="Unmute @FCBarcelona" data-placement="top">
                                                        <span class="Icon Icon--muted Icon--medium"><span class="visuallyhidden">Unmute <span class="username u-dir u-textTruncate" dir="ltr">@<b>FCBarcelona</b></span></span></span>
                                                    </button>
                                                    <button type="button" class="first-load js-tooltip mute-button btn small plain-btn" title="Mute @FCBarcelona" data-placement="top">
                                                        <span class="Icon Icon--unmuted Icon--medium"><span class="visuallyhidden">Mute <span class="username u-dir u-textTruncate" dir="ltr">@<b>FCBarcelona</b></span></span></span>
                                                    </button>
                                                </span>
                                                <span class="user-actions-follow-button js-follow-btn follow-button">
                                                    <button type="button" class="EdgeButton EdgeButton--secondary EdgeButton--small button-text follow-text">
                                                        <span aria-hidden="true">Follow</span>
                                                        <span class="u-hiddenVisually">Follow 
                                                            <span class="username u-dir u-textTruncate" dir="ltr">@<b>FCBarcelona</b></span>
                                                        </span>
                                                    </button>
                                                    <button type="button" class="EdgeButton EdgeButton--primary EdgeButton--small button-text following-text">
                                                        <span aria-hidden="true">Following</span>
                                                        <span class="u-hiddenVisually">Following 
                                                            <span class="username u-dir u-textTruncate" dir="ltr">@<b>FCBarcelona</b></span>
                                                        </span>
                                                    </button>
                                                    <button type="button" class="EdgeButton EdgeButton--danger EdgeButton--small button-text unfollow-text">
                                                        <span aria-hidden="true">Unfollow</span>
                                                        <span class="u-hiddenVisually">Unfollow 
                                                            <span class="username u-dir u-textTruncate" dir="ltr">@<b>FCBarcelona</b></span>
                                                        </span>
                                                    </button>
                                                    <button type="button" class="EdgeButton EdgeButton--invertedDanger EdgeButton--small button-text blocked-text">
                                                        <span aria-hidden="true">Blocked</span>
                                                        <span class="u-hiddenVisually">Blocked 
                                                            <span class="username u-dir u-textTruncate" dir="ltr">@<b>FCBarcelona</b></span>
                                                        </span>
                                                    </button>
                                                    <button type="button" class="EdgeButton EdgeButton--danger EdgeButton--small button-text unblock-text">
                                                        <span aria-hidden="true">Unblock</span>
                                                        <span class="u-hiddenVisually">Unblock 
                                                            <span class="username u-dir u-textTruncate" dir="ltr">@<b>FCBarcelona</b></span>
                                                        </span>
                                                    </button>
                                                    <button type="button" class="EdgeButton EdgeButton--secondary EdgeButton--small button-text pending-text">
                                                        <span aria-hidden="true">Pending</span>
                                                        <span class="u-hiddenVisually">Pending follow request from 
                                                            <span class="username u-dir u-textTruncate" dir="ltr">@<b>FCBarcelona</b></span>
                                                        </span>
                                                    </button>
                                                    <button type="button" class="EdgeButton EdgeButton--secondary EdgeButton--small button-text cancel-text">
                                                        <span aria-hidden="true">Cancel</span>
                                                        <span class="u-hiddenVisually">Cancel your follow request to 
                                                            <span class="username u-dir u-textTruncate" dir="ltr">@<b>FCBarcelona</b></span>
                                                        </span>
                                                    </button>
                                                </span>
    
                                        </div>
                                    </div>
    
                                </div>
                            </div>
    
                            <div class="ProfileCard-userFields">
                                <div class="ProfileNameTruncated account-group">
                                    <div class="u-textTruncate u-inlineBlock ProfileNameTruncated-withBadges ProfileNameTruncated-withBadges--1">
                                        <a class="fullname ProfileNameTruncated-link u-textInheritColor js-nav" href="/FCBarcelona" data-aria-label-part="">
                                        {this.state.persons[index]}</a></div><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span>
                                    </div>
          
                                    <span class="ProfileCard-screenname">
                                        <a href="/FCBarcelona" class="ProfileCard-screennameLink u-linkComplex js-nav" data-aria-label-part="">
                                            <span class="username u-dir" dir="ltr">@<b class="u-linkComplex-target">K2015</b></span>
                                    </a><span>‏</span>
                                    </span>
        
                                </div>
                            </div>
                        </div>
    
    
                    </div>
                </div>
                )
            })
            return result
        }  
    }

    render() {
        return (
            <div>
                {/* Following */}

                <Dialog
                    fullWidth={true}
                    maxWidth="sm"
                    open={this.props.followReducer.open}
                    onClose={this.props.handleCloseFollowing}
                    aria-labelledby="max-width-dialog-title"
                    maxWidth="25px"
                >               
                    <DialogTitle id="max-width-dialog-title">Following</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.loadFollow()}
                            {/* You are not following anyone now. */}
            
                        </DialogContentText>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleCloseFollowing} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>


                               {/* Follower */}

                <Dialog
                    fullWidth={true}
                    maxWidth="sm"
                    open={this.props.followReducer.openFollower}
                    onClose={this.props.handleCloseFollower}
                    aria-labelledby="max-width-dialog-title"
                    maxWidth="25px"
                >
                    <DialogTitle id="max-width-dialog-title">Follower</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        <div class="Grid-cell u-size1of2 u-lg-size1of3 u-mb10" data-test-selector="ProfileTimelineUser" role="presentation">
                            <div class="js-stream-item" role="listitem" data-item-id="1069077563555729408" id="stream-item-user-1069077563555729408" data-item-type="user">
                                <div class="ProfileCard js-actionable-user" data-screen-name="TrnNguynHongPh3" data-user-id="1069077563555729408" data-feedback-token="" data-impression-id="">
                                    <a class="ProfileCard-bg js-nav" href="/TrnNguynHongPh3" style={{backgroundColor: "#1DA1F2"}} tabindex="-1" aria-hidden="true">
                                    </a>
                                    <div class="ProfileCard-content">
                                        <a class="ProfileCard-avatarLink js-nav js-tooltip" href="/TrnNguynHongPh3" tabindex="-1" aria-hidden="true" data-original-title="Trần Nguyễn Hoàng Phúc">
                                            <img class="ProfileCard-avatarImage js-action-profile-avatar" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png" alt=""/>
                                        </a>
    
                                        <div class="ProfileCard-actions">
                                            <div class="ProfileCard-userActions with-rightCaret js-userActions">
                                                <div class="UserActions   UserActions--small u-textLeft">
                                                    <div class="user-actions btn-group not-following not-muting can-dm " data-user-id="1069077563555729408" data-screen-name="TrnNguynHongPh3" data-name="Trần Nguyễn Hoàng Phúc" data-protected="false">
                                                        <span class="UserActions-moreActions u-inlineBlock">
                                                            <button type="button" class="js-tooltip unmute-button btn small plain-btn" title="Unmute @TrnNguynHongPh3" data-placement="top">
                                                                <span class="Icon Icon--muted Icon--medium">
                                                                    <span class="visuallyhidden">Unmute 
                                                                        <span class="username u-dir u-textTruncate" dir="ltr">@<b>TrnNguynHongPh3</b></span>
                                                                    </span>
                                                                </span>
                                                            </button>
                                                            <button type="button" class="first-load js-tooltip mute-button btn small plain-btn" title="Mute @TrnNguynHongPh3" data-placement="top">
                                                                <span class="Icon Icon--unmuted Icon--medium">
                                                                    <span class="visuallyhidden">Mute 
                                                                        <span class="username u-dir u-textTruncate" dir="ltr">@<b>TrnNguynHongPh3</b></span>
                                                                    </span>
                                                                </span>
                                                            </button>
                                                        </span>
                                                        <span class="user-actions-follow-button js-follow-btn follow-button">
                                                            <button type="button" class="EdgeButton EdgeButton--secondary EdgeButton--small button-text follow-text">
                                                                <span aria-hidden="true">Follow</span>
                                                                <span class="u-hiddenVisually">Follow 
                                                                    <span class="username u-dir u-textTruncate" dir="ltr">@<b>TrnNguynHongPh3</b></span>
                                                                </span>
                                                            </button>
                                                            <button type="button" class="EdgeButton EdgeButton--primary EdgeButton--small button-text following-text">
                                                                <span aria-hidden="true">Following</span>
                                                                <span class="u-hiddenVisually">Following 
                                                                    <span class="username u-dir u-textTruncate" dir="ltr">@<b>TrnNguynHongPh3</b></span>
                                                                </span>
                                                            </button>
                                                            <button type="button" class="EdgeButton EdgeButton--danger EdgeButton--small button-text unfollow-text">
                                                                <span aria-hidden="true">Unfollow</span>
                                                                <span class="u-hiddenVisually">Unfollow <span class="username u-dir u-textTruncate" dir="ltr">@<b>TrnNguynHongPh3</b></span></span>
                                                            </button>
                                                            <button type="button" class="EdgeButton EdgeButton--invertedDanger EdgeButton--small button-text blocked-text">
                                                                <span aria-hidden="true">Blocked</span>
                                                                <span class="u-hiddenVisually">Blocked <span class="username u-dir u-textTruncate" dir="ltr">@<b>TrnNguynHongPh3</b></span></span>
                                                            </button>
                                                            <button type="button" class="EdgeButton EdgeButton--danger EdgeButton--small button-text unblock-text">
                                                                <span aria-hidden="true">Unblock</span>
                                                                <span class="u-hiddenVisually">Unblock <span class="username u-dir u-textTruncate" dir="ltr">@<b>TrnNguynHongPh3</b></span></span>
                                                            </button>
                                                            <button type="button" class="EdgeButton EdgeButton--secondary EdgeButton--small button-text pending-text">
                                                                <span aria-hidden="true">Pending</span>
                                                                <span class="u-hiddenVisually">Pending follow request from <span class="username u-dir u-textTruncate" dir="ltr">@<b>TrnNguynHongPh3</b></span></span>
                                                            </button>
                                                            <button type="button" class="EdgeButton EdgeButton--secondary EdgeButton--small button-text cancel-text">
                                                                <span aria-hidden="true">Cancel</span>
                                                                <span class="u-hiddenVisually">Cancel your follow request to <span class="username u-dir u-textTruncate" dir="ltr">@<b>TrnNguynHongPh3</b></span></span>
                                                            </button>
                                                        </span>

                                                    <div class="dropdown ">
                                                        <button type="button" class="user-dropdown dropdown-toggle js-dropdown-toggle js-link js-tooltip btn plain-btn small-user-dropdown" data-original-title="More user actions">
                                                            <span class="user-dropdown-icon Icon Icon--dotsVertical Icon--small"><span class="visuallyhidden">User actions</span></span>
                                                        </button>
                                                        <div class="dropdown-menu dropdown-menu--rightAlign is-autoCentered is-forceRight">
                                                            <div class="dropdown-caret">
                                                                <span class="caret-outer"></span>
                                                                <span class="caret-inner"></span>
                                                            </div>
                                                            <ul>
                                                                <li class="mention-text not-blocked"><button type="button" class="dropdown-link">Tweet to <span class="username u-dir u-textTruncate" dir="ltr">@<b>TrnNguynHongPh3</b></span></button></li>
                                                                <li class="dm-text"><button type="button" class="dropdown-link">Send a Direct Message</button></li>
                                                                <li class="list-text not-blocked"><button type="button" class="dropdown-link">Add or remove from lists…</button></li>
                                                                <li class="dropdown-divider not-blocked"></li>
                                                                <li class="mute-user-item"><button type="button" class="dropdown-link">Mute <span class="username u-dir u-textTruncate" dir="ltr">@<b>TrnNguynHongPh3</b></span></button></li>
                                                                <li class="unmute-user-item"><button type="button" class="dropdown-link">Unmute <span class="username u-dir u-textTruncate" dir="ltr">@<b>TrnNguynHongPh3</b></span></button></li>

                                                                <li class="block-text not-blocked"><button type="button" class="dropdown-link">Block <span class="username u-dir u-textTruncate" dir="ltr">@<b>TrnNguynHongPh3</b></span></button></li>
                                                                <li class="unblock-text"><button type="button" class="dropdown-link">Unblock <span class="username u-dir u-textTruncate" dir="ltr">@<b>TrnNguynHongPh3</b></span></button></li>
                                                                <li class="report-text"><button type="button" class="dropdown-link">Report <span class="username u-dir u-textTruncate" dir="ltr">@<b>TrnNguynHongPh3</b></span></button></li>
                                                                <li class="hide-suggestion-text"><button type="button" class="dropdown-link">Hide this suggestion</button></li>
                                                                <li class="dropdown-divider is-following"></li>
                                                                <li class="retweet-on-text"><button type="button" class="dropdown-link">Turn on Retweets</button></li>
                                                                <li class="retweet-off-text"><button type="button" class="dropdown-link">Turn off Retweets</button></li>
                                                                <li class="device-notifications-on-text"><button type="button" class="dropdown-link">Turn on mobile notifications</button></li>
                                                                <li class="device-notifications-off-text"><button type="button" class="dropdown-link">Turn off mobile notifications</button></li>
                                                                <li class="dropdown-divider is-embeddable"></li>
                                                                <li class="embed-profile"><button type="button" class="dropdown-link">Embed this Profile</button></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                <div class="ProfileCard-userFields">
                            <div class="ProfileNameTruncated account-group">
                                <div class="u-textTruncate u-inlineBlock">
                                    <a class="fullname ProfileNameTruncated-link u-textInheritColor js-nav" href="/TrnNguynHongPh3" data-aria-label-part="">
                                    Trần Nguyễn Hoàng Phúc</a></div><span class="UserBadges"></span>
                                </div>
                                    
                                    <span class="ProfileCard-screenname">
                                        <a href="/TrnNguynHongPh3" class="ProfileCard-screennameLink u-linkComplex js-nav" data-aria-label-part="">
                                        <span class="username u-dir" dir="ltr">@<b class="u-linkComplex-target">TrnNguynHongPh3</b></span>
                                        </a><span>‏</span> <span class="FollowStatus">Follows you</span>
                                    </span>
                                    
                                    <p class="ProfileCard-bio u-dir" dir="ltr" data-aria-label-part=""></p>
                                    


                                    </div>
                                </div>
                                </div>


                            </div>
                        </div>
                        </DialogContentText>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleCloseFollower} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        followReducer: state.followReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleCloseFollowing: () => {
            dispatch({ type: OPEN_DIALOG_FOLLOWING, open: false })
        },
        handleCloseFollower: () => {
            dispatch({ type: OPEN_DIALOG_FOLLOWER, openFollower: false })
        },
        storeFollow: (follow) => {
            dispatch({type: STORE_FOLLOW, followList: follow})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Follow);
