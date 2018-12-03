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
import { EDIT_PROFILE } from '../../Constant/actionTypes';
import { OPEN_DIALOG_FOLLOWING } from '../../Constant/actionTypes';
import { OPEN_DIALOG_FOLLOWER } from '../../Constant/actionTypes';
import Follow from '../Follow/Follow';
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
                                                                <span className="ProfileNav-value" data-is-compact="false">1</span>
                                                            </a>
                                                        </li>
                                                        <li className="ProfileNav-item ProfileNav-item--following" data-more-item=".ProfileNav-dropdownItem--userMoments" onClick={this.props.openDialogFollower}>
                                                            <a className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip  js-nav u-textUserColor" title="0 Moments" data-nav="user_moments" href="/NamThan82223837/moments">
                                                                <span className="ProfileNav-label" aria-hidden="true">Followers</span>
                                                                <span className="u-hiddenVisually">Followers</span>
                                                                <span className="ProfileNav-value" data-is-compact="false">1</span>
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
                <Follow/>
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
            dispatch({ type: OPEN_DIALOG_FOLLOWING, open: true })
        },
        openDialogFollower: () => {
            dispatch({ type: OPEN_DIALOG_FOLLOWER, openFollower: true })
        },
        handleClose: () => {
            dispatch({ type: OPEN_DIALOG_CONFIG, open: false })
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