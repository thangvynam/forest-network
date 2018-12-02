import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';

import { OPEN_DIALOG_CONFIG } from '../../Constant/actionTypes';
import { OPEN_DIALOG_FOLLOWING } from '../../Constant/actionTypes';
import { EDIT_PROFILE } from '../../Constant/actionTypes';

class CoverImage extends Component {
    render() {
        return (
            <div id="page-outer">
                <div id="page-container" className="AppContent">
                    <div className="ProfilePage-editingOverlay" />
                    <div className="ProfilePage-testForEditingCss" />
                    <div className="ProfileCanopy ProfileCanopy--withNav js-variableHeightTopBar">
                        <div className="ProfileCanopy-inner">
                            <div className="ProfileCanopy-header u-bgUserColor" style={{ marginTop: 0 }}>
                                <div className="AppContainer">
                                    <div className="ProfileCanopy-avatar">
                                        <div className="ProfileAvatarEditing">
                                            <div className="ProfileAvatarEditing-overlay" />
                                            <div className="ProfileAvatarEditing-buttonContainer">
                                                <button className="ProfileAvatarEditing-button u-boxShadowInsetUserColorHover" type="button" tabIndex={2}>
                                                    <div className="ProfileAvatarEditing-addAvatarHelp">
                                                        <span className="Icon Icon--cameraPlus" />
                                                        <p>Add a profile photo</p>
                                                    </div>
                                                    <div className="ProfileAvatarEditing-changeAvatarHelp">
                                                        <span className="Icon Icon--camera" />
                                                        <p>Change your profile photo</p>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ProfileCanopy-headerPromptAnchor" />
                                </div>
                            </div>
                            <div className="ProfileCanopy-navBar u-boxShadow">
                                <div className="ProfilePage-editingOverlay" />
                                <div className="AppContainer">
                                    <div className="Grid Grid--withGutter">
                                        <div className="Grid-cell u-size1of3 u-lg-size1of4">
                                            <div className="ProfileCanopy-card" role="presentation" aria-hidden="true">
                                                <div className="ProfileCardMini">
                                                    <a className="ProfileCardMini-avatar profile-picture js-tooltip" href="https://abs.twimg.com/sticky/default_profile_images/default_profile_200x200.png" title="Nam Thang" data-resolved-url-large="https://abs.twimg.com/sticky/default_profile_images/default_profile_200x200.png" data-url="https://abs.twimg.com/sticky/default_profile_images/default_profile_200x200.png" rel="noopener" tabIndex={-1}>
                                                        <img className="ProfileCardMini-avatarImage" alt="Nam Thang" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" />
                                                    </a>
                                                    <div className="ProfileCardMini-details">
                                                        <div className="ProfileNameTruncated account-group">
                                                            <div className="u-textTruncate u-inlineBlock">
                                                                <a className="fullname ProfileNameTruncated-link u-textInheritColor js-nav" href="/NamThan82223837" data-aria-label-part tabIndex={-1}>
                                                                    Nam Thang</a></div><span className="UserBadges" />
                                                        </div>
                                                        <div className="ProfileCardMini-screenname">
                                                            <a href="/NamThan82223837" className="ProfileCardMini-screennameLink u-linkComplex js-nav u-dir" dir="ltr" tabIndex={-1}>
                                                                <span className="username u-dir" dir="ltr">@<b className="u-linkComplex-target">NamThan82223837</b></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Grid-cell u-size2of3 u-lg-size3of4">
                                            <div className="ProfileCanopy-nav">
                                                <div className="ProfileNav" role="navigation" data-user-id={1068706177666580480}>
                                                    <ul className="ProfileNav-list">
                                                        <li className="ProfileNav-item ProfileNav-item--tweets is-active">
                                                            <a className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav" data-nav="tweets" tabIndex={0} data-original-title="1 Tweet" href="#test">
                                                                <span className="ProfileNav-label" aria-hidden="true">Tweets</span>
                                                                <span className="u-hiddenVisually">Tweets, current page.</span>
                                                                <span className="ProfileNav-value" data-count={1} data-is-compact="false">1</span>
                                                            </a>
                                                        </li>
                                                        <li className="ProfileNav-item ProfileNav-item--following" data-more-item=".ProfileNav-dropdownItem--userMoments" onClick={this.props.openDialogFollowing}>
                                                            <a className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip  js-nav u-textUserColor" title="0 Moments" data-nav="user_moments" href="/NamThan82223837/moments">
                                                                <span className="ProfileNav-label" aria-hidden="true">Following</span>
                                                                <span className="u-hiddenVisually">Following</span>
                                                                <span className="ProfileNav-value" data-is-compact="false">0</span>
                                                            </a>
                                                        </li>
                                                        <li className="ProfileNav-item ProfileNav-item--following" data-more-item=".ProfileNav-dropdownItem--userMoments">
                                                            <a className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip  js-nav u-textUserColor" title="0 Moments" data-nav="user_moments" href="/NamThan82223837/moments">
                                                                <span className="ProfileNav-label" aria-hidden="true">Followers</span>
                                                                <span className="u-hiddenVisually">Followers</span>
                                                                <span className="ProfileNav-value" data-is-compact="false">0</span>
                                                            </a>
                                                        </li>
                                                        <li className="ProfileNav-item ProfileNav-item--lists" data-more-item=".ProfileNav-dropdownItem--lists">
                                                            <a className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor" data-nav="all_lists" href="/NamThan82223837/lists" data-original-title="0 Lists">
                                                                <span className="ProfileNav-label" aria-hidden="true">Lists</span>
                                                                <span className="u-hiddenVisually">Lists</span>
                                                                <span className="ProfileNav-value" data-is-compact="false">0</span>
                                                            </a>
                                                        </li>
                                                        <li className="ProfileNav-item ProfileNav-item--moments" data-more-item=".ProfileNav-dropdownItem--userMoments">
                                                            <a className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip  js-nav u-textUserColor" title="0 Moments" data-nav="user_moments" href="/NamThan82223837/moments">
                                                                <span className="ProfileNav-label" aria-hidden="true">Moments</span>
                                                                <span className="u-hiddenVisually">Moments</span>
                                                                <span className="ProfileNav-value" data-is-compact="false">0</span>
                                                            </a>
                                                        </li>
                                                        <li className="ProfileNav-item ProfileNav-item--userActions u-floatRight u-textRight with-rightCaret ">
                                                            <div className="UserActions   u-textLeft">
                                                                <button type="button" className="UserActions-editButton edit-button EdgeButton EdgeButton--tertiary" data-scribe-element="profile_edit_button" onClick={this.props.openDialogConfig}>
                                                                    <span className="button-text">Edit profile</span>
                                                                </button>
                                                                <div className="ProfilePage-editingButtons">
                                                                    <button className="ProfilePage-cancelButton EdgeButton EdgeButton--tertiary" data-scribe-element="cancel_button" tabIndex={4}>Cancel</button>
                                                                    <span className="ProfilePage-savingIndicator"><span className="spinner-small" />Saving...</span>
                                                                    <button className="ProfilePage-saveButton EdgeButton EdgeButton--secondary" tabIndex={3}>Save changes</button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog
                    open={this.props.coverImageReducer.open}
                    onClose={this.props.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To edit profile , please enter your Name | Bio | Location | Website | Birthday . We will send
                            updates occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            fullWidth
                            onChange={(event) => this.props.handleInputChangeName(event)}
                        />
                        <TextField
                            margin="dense"
                            id="location"
                            label="Location"
                            fullWidth
                            onChange={(event) => this.props.handleInputChangeBio(event)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.save} color="primary">
                            Save
                        </Button>
                        <Button onClick={this.props.handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Following */}

                <Dialog
                    fullWidth={true}
                    maxWidth="sm"
                    open={this.props.coverImageReducer.openFollowing}
                    onClose={this.props.handleClose}
                    aria-labelledby="max-width-dialog-title"
                >
                    <DialogTitle id="max-width-dialog-title">Following</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {/* You are not following anyone now. */}
                            <div class="Grid-cell u-size1of2 u-lg-size1of3 u-mb10" data-test-selector="ProfileTimelineUser" role="presentation">
                                <div class="js-stream-item" role="listitem" data-item-id="96951800" id="stream-item-user-96951800" data-item-type="user">
                                <div class="ProfileCard js-actionable-user" data-screen-name="FCBarcelona" data-user-id="96951800" data-feedback-token="" data-impression-id="">
                                    <a class="ProfileCard-bg js-nav" href="/FCBarcelona" tabindex="-1" aria-hidden="true" 
                                    // style="background-color: #9B0034; background-image: url(https://pbs.twimg.com/profile_banners/96951800/1530397801/600x200);"
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

                                        <div class="dropdown ">
                                            <button type="button" class="user-dropdown dropdown-toggle js-dropdown-toggle js-link js-tooltip btn plain-btn small-user-dropdown" title="More user actions" aria-haspopup="true">
                                                <span class="user-dropdown-icon Icon Icon--dotsVertical Icon--small">
                                                    <span class="visuallyhidden">User actions</span>
                                                </span>
                                            </button>
                                            <div class="dropdown-menu dropdown-menu--rightAlign is-autoCentered is-forceRight">
                                                <div class="dropdown-caret">
                                                    <span class="caret-outer"></span>
                                                    <span class="caret-inner"></span>
                                                </div>
                                            <ul>
                                                <li class="mention-text not-blocked"><button type="button" class="dropdown-link">Tweet to <span class="username u-dir u-textTruncate" dir="ltr">@<b>FCBarcelona</b></span></button></li>
                                                <li class="dm-text"><button type="button" class="dropdown-link">Send a Direct Message</button></li>
                                                <li class="list-text not-blocked"><button type="button" class="dropdown-link">Add or remove from lists…</button></li>
                                                <li class="dropdown-divider not-blocked"></li>
                                                <li class="mute-user-item"><button type="button" class="dropdown-link">Mute <span class="username u-dir u-textTruncate" dir="ltr">@<b>FCBarcelona</b></span></button></li>
                                                <li class="unmute-user-item"><button type="button" class="dropdown-link">Unmute <span class="username u-dir u-textTruncate" dir="ltr">@<b>FCBarcelona</b></span></button></li>

                                                <li class="block-text not-blocked"><button type="button" class="dropdown-link">Block <span class="username u-dir u-textTruncate" dir="ltr">@<b>FCBarcelona</b></span></button></li>
                                                <li class="unblock-text"><button type="button" class="dropdown-link">Unblock <span class="username u-dir u-textTruncate" dir="ltr">@<b>FCBarcelona</b></span></button></li>
                                                <li class="report-text"><button type="button" class="dropdown-link">Report <span class="username u-dir u-textTruncate" dir="ltr">@<b>FCBarcelona</b></span></button></li>
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
                                <div class="u-textTruncate u-inlineBlock ProfileNameTruncated-withBadges ProfileNameTruncated-withBadges--1">
                                    <a class="fullname ProfileNameTruncated-link u-textInheritColor js-nav" href="/FCBarcelona" data-aria-label-part="">
                                    FC Barcelona</a></div><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span>
                                </div>
      
                                <span class="ProfileCard-screenname">
                                    <a href="/FCBarcelona" class="ProfileCard-screennameLink u-linkComplex js-nav" data-aria-label-part="">
                                        <span class="username u-dir" dir="ltr">@<b class="u-linkComplex-target">FCBarcelona</b></span>
                                </a><span>‏</span>
                                </span>
      
                                <p class="ProfileCard-bio u-dir" dir="ltr" data-aria-label-part=""><a href="/hashtag/For%C3%A7aBar%C3%A7a?src=hash" data-query-source="hashtag_click" class="twitter-hashtag pretty-link js-nav" dir="ltr"><s>#</s><b>ForçaBarça</b></a>! Join us: <a href="/fcbarcelona_cat" class="tweet-url twitter-atreply pretty-link" dir="ltr" data-mentioned-user-id="0" rel="nofollow"><s>@</s><b>fcbarcelona_cat</b></a> <a href="/fcbarcelona_es" class="tweet-url twitter-atreply pretty-link" dir="ltr" data-mentioned-user-id="0" rel="nofollow"><s>@</s><b>fcbarcelona_es</b></a> <a href="/fcbarcelona_br" class="tweet-url twitter-atreply pretty-link" dir="ltr" data-mentioned-user-id="0" rel="nofollow"><s>@</s><b>fcbarcelona_br</b></a> <a href="/fcbarcelona_jp" class="tweet-url twitter-atreply pretty-link" dir="ltr" data-mentioned-user-id="0" rel="nofollow"><s>@</s><b>fcbarcelona_jp</b></a> <a href="/fcbarcelona_id" class="tweet-url twitter-atreply pretty-link" dir="ltr" data-mentioned-user-id="0" rel="nofollow"><s>@</s><b>fcbarcelona_id</b></a>, <a href="/fcbarcelona_ara" class="tweet-url twitter-atreply pretty-link" dir="ltr" data-mentioned-user-id="0" rel="nofollow"><s>@</s><b>fcbarcelona_ara</b></a> <a href="/fcbarcelona_fra" class="tweet-url twitter-atreply pretty-link" dir="ltr" data-mentioned-user-id="0" rel="nofollow"><s>@</s><b>fcbarcelona_fra</b></a> …</p>
      


                            </div>
                        </div>
                    </div>


                </div>
            </div>
                        </DialogContentText>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleCloseFollowing} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        coverImageReducer: state.coverImageReducer,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    let name = '';
    let location = '';
    return {
        openDialogConfig: () => {
            dispatch({ type: OPEN_DIALOG_CONFIG, open: true })
        },
        openDialogFollowing: () => {
            dispatch({ type: OPEN_DIALOG_FOLLOWING, openFollowing: true })
        },
        handleClose: () => {
            dispatch({ type: OPEN_DIALOG_CONFIG, open: false })
        },
        handleCloseFollowing: () => {
            dispatch({ type: OPEN_DIALOG_FOLLOWING, openFollowing: false })
        },
        handleInputChangeName: (event) => {
            name = event.target.value;
        },
        handleInputChangeBio: (event) => {
            location = event.target.value;
        },
        save: () =>{
            dispatch({type:EDIT_PROFILE,open:false,name:name,location:location})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoverImage);