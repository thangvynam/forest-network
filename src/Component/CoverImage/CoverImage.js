import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import { connect } from 'react-redux';

import { OPEN_DIALOG_CONFIG } from '../../Constant/actionTypes';
import { EDIT_PROFILE } from '../../Constant/actionTypes';
import { OPEN_DIALOG_FOLLOWING, OPEN_DIALOG_FOLLOW } from '../../Constant/actionTypes';
import { OPEN_DIALOG_FOLLOWER, STORE_IMAGE } from '../../Constant/actionTypes';
import Follow from '../Follow/Follow';
import * as transaction from "../../tx"
const {Keypair} = require('stellar-base');
const CryptoJS = require("crypto-js")

class CoverImage extends Component {

    componentDidMount(){
        var bytes  = CryptoJS.AES.decrypt(sessionStorage.getItem("secret_key"), 'CNM2018');
        const secret_key = bytes.toString(CryptoJS.enc.Utf8)
        const public_key = Keypair.fromSecret(secret_key).publicKey(); 
        axios.post('/getImage', {public_key})
        .then((res)=> {
            // console.log(res.data);
            
            let src = 'data:image/jpeg;base64,' + res.data;
            this.props.saveImg(src)
        })
    }

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
                                    <img src={this.props.coverImageReducer.imgSrc} alt="avatar" style={{width: '200px', height:'200px', borderRadius: '50%'}}/>
                                        {/* <div className="ProfileAvatarEditing">
                                           
                                            <div className="ProfileAvatarEditing-buttonContainer">
                                                
                                            </div>
                                        </div> */}
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
                                                                <span className="ProfileNav-value" data-count={1} data-is-compact="false">{this.props.detailTweetReducer.tweet.length}</span>
                                                            </a>
                                                        </li>
                                                        <li className="ProfileNav-item ProfileNav-item--following" data-more-item=".ProfileNav-dropdownItem--userMoments" onClick={this.props.openDialogFollowing}>
                                                            <a className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip  js-nav u-textUserColor" title="0 Moments" data-nav="user_moments" href="/NamThan82223837/moments">
                                                                <span className="ProfileNav-label" aria-hidden="true">Following</span>
                                                                <span className="u-hiddenVisually">Following</span>
                                                                <span className="ProfileNav-value" data-is-compact="false">{this.props.followReducer.followList.length}</span>
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
                                                        <li className="ProfileNav-item  u-textRight with-rightCaret " style={{marginLeft:"15em"}} >
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
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <li className="ProfileNav-item  u-textRight with-rightCaret " >
                                                            <div className="UserActions   u-textLeft">
                                                                <button type="button" className="UserActions-editButton edit-button EdgeButton EdgeButton--tertiary" data-scribe-element="profile_edit_button" onClick={this.props.openDialogFollow}>
                                                                    <span className="button-text">Follow</span>
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
                            To edit profile , please enter your Name . We will send
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
                <Dialog
                    open={this.props.coverImageReducer.openFollow}
                    onClose={this.props.handleCloseFollow}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Follow</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Input public key 
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Public Key"
                            fullWidth
                            onChange={(event) => this.props.handleInputFollow(event)}
                        />
                      
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleFollow} color="primary">
                            Follow
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
        detailTweetReducer:state.detailTweetReducer,
        followReducer: state.followReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    let name = '';
    let followKey = '';
    return {
        openDialogConfig: () => {
            dispatch({ type: OPEN_DIALOG_CONFIG, open: true })
        },
        openDialogFollow: () => {
            dispatch({ type: OPEN_DIALOG_FOLLOW, openFollow: true })
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
        handleCloseFollow: () => {
            dispatch({ type: OPEN_DIALOG_FOLLOW, openFollow: false })
        },
        handleInputChangeName: (event) => {
            name = event.target.value;
        },
        handleInputFollow: (event) => {
            followKey = event.target.value;
        },
        save: () =>{
            var bytes  = CryptoJS.AES.decrypt(sessionStorage.getItem("secret_key"), 'CNM2018');
            const secret_key = bytes.toString(CryptoJS.enc.Utf8)
            const public_key = Keypair.fromSecret(secret_key).publicKey(); 
            axios.post('/update_name',{public_key, name}).then(res => {
                let tx = res.data
                tx.memo = Buffer.alloc(0)
                tx.signature = Buffer.alloc(64, 0)
                tx.params.value = Buffer.from(tx.params.value)
                transaction.sign(tx, secret_key) 
                let txHash = '0x' + transaction.encode(tx).toString('hex')
                axios.get("https://komodo.forest.network/broadcast_tx_commit?tx=" + txHash).then((response) => {})
            })
            dispatch({type:EDIT_PROFILE,name:name})
        },
        handleFollow: () =>{
            var bytes  = CryptoJS.AES.decrypt(sessionStorage.getItem("secret_key"), 'CNM2018');
            const secret_key = bytes.toString(CryptoJS.enc.Utf8)
            const public_key = Keypair.fromSecret(secret_key).publicKey(); 
            axios.post('/follow',{public_key, followKey}).then(res => {
                let tx = res.data
                console.log(tx);
                
                tx.memo = Buffer.alloc(0)
                tx.signature = Buffer.alloc(64, 0)
                tx.params.value = Buffer.from(tx.params.value)
                transaction.sign(tx, secret_key) 
                let txHash = '0x' + transaction.encode(tx).toString('hex')
                axios.get("https://komodo.forest.network/broadcast_tx_commit?tx=" + txHash).then((response) => {})
                dispatch({ type: OPEN_DIALOG_FOLLOW, openFollow: false })
                alert("Follow successfully!")
            })
        },
        saveImg: (src) => {
            dispatch({type: STORE_IMAGE, imgSrc: src})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoverImage);