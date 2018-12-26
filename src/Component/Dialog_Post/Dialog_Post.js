import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import axios from 'axios';

import { OPEN_DIALOG_POST } from '../../Constant/actionTypes';
import * as transaction from "../../tx"
const {Keypair} = require('stellar-base');
const CryptoJS = require("crypto-js")
class Dialog_Post extends Component {
    render() {
        return (
            <div>
                <Dialog
                    fullWidth={true}
                    open={this.props.postReducer.open}
                    onClose={this.props.handleCloseDialog}
                    aria-labelledby="max-width-dialog-title"
                    maxWidth="10px"
                >

                    <div className="modal-content TweetstormDialog-content">
                        <div class=" modal-header">
                            <h3 className="modal-title" id="Tweetstorm-dialog-header">Compose new Post</h3>
                        </div>
                        <div id="Tweetstorm-tweet-box-0" className="TweetstormDialog-tweet-box t1-form tweet-form initialized is-tweet-box-focus" style={{}} data-index={0}>
                            <div className="tweet-box-avatar">
                                <img className="Avatar--size32 user-avatar-img avatar" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="Nam Thang" />
                            </div>
                            <div className="tweet-box-content">
                                <div className="tweet-content">
                                    <div className="ComposerDragHelp">
                                        <span className="ComposerDragHelp-text" />
                                    </div>
                                    <span className="visuallyhidden aria-index-label" id="Tweetstorm-tweet-box-0-label">Tweet 1</span>
                                    <span className="visuallyhidden" id="Tweetstorm-tweet-box-0-text-label">Tweet text</span>
                                    <div className="RichEditor RichEditor--emojiPicker">
                                        <div className="RichEditor-mozillaCursorWorkaround">&nbsp;</div>
                                        <div className="RichEditor-container u-borderRadiusInherit">
                                            <div role="listbox" className="dropdown-menu typeahead" id="typeahead-dropdown-6">
                                                <div aria-hidden="true" className="dropdown-caret">
                                                    <div className="caret-outer" />
                                                    <div className="caret-inner" />
                                                </div>
                                                <div role="presentation" className="dropdown-inner js-typeahead-results"><ul role="presentation" className="typeahead-items typeahead-accounts social-context js-typeahead-accounts block0" style={{ display: 'none' }}>
                                                    <li role="presentation" data-user-id data-user-screenname data-remote="true" data-score className="typeahead-item typeahead-account-item js-selectable">
                                                        <a role="option" className="js-nav" data-query-source="typeahead_click" data-search-query data-ds="account">
                                                            <div className="js-selectable typeahead-in-conversation hidden">
                                                                <span className="Icon Icon--follower Icon--small" />
                                                                <span className="typeahead-in-conversation-text">In this conversation</span>
                                                            </div>
                                                            <img className="avatar size32" alt />
                                                            <span className="typeahead-user-item-info account-group">
                                                                <span className="fullname" /><span className="UserBadges"><span className="Icon Icon--verified js-verified hidden"><span className="u-hiddenVisually">Verified account</span></span><span className="Icon Icon--protected js-protected hidden"><span className="u-hiddenVisually">Protected Tweets</span></span></span><span className="UserNameBreak">&nbsp;</span><span className="username u-dir" dir="ltr">@<b /></span>
                                                            </span>
                                                            <span className="typeahead-social-context" />
                                                        </a>
                                                    </li>
                                                    <li role="presentation" className="js-selectable typeahead-accounts-shortcut js-shortcut"><a role="option" className="js-nav" href data-search-query data-query-source="typeahead_click" data-shortcut="true" data-ds="account_search" /></li>
                                                </ul><ul role="presentation" className="typeahead-items typeahead-topics block1" style={{ display: 'none' }}>
                                                        <li role="presentation" className="typeahead-item typeahead-topic-item">
                                                            <a role="option" className="js-nav" href data-search-query data-query-source="typeahead_click" data-ds="topics" tabIndex={-1} />
                                                        </li>
                                                    </ul></div>
                                            </div>
                                            <div className="RichEditor-scrollContainer u-borderRadiusInherit">
                                                <textarea aria-labelledby="Tweetstorm-tweet-box-0-label Tweetstorm-tweet-box-0-text-label" name="tweet" className="tweet-box rich-editor is-showPlaceholder" contentEditable="true" spellCheck="true" role="textbox" aria-multiline="true"  data-placeholder-poll-composer-on="Ask a question..."  dir="ltr" aria-autocomplete="list" 
                                                    aria-expanded="false" aria-owns="typeahead-dropdown-6" style={{width:"100%"}} placeholder="What's on your mind ?" onChange={(event) => this.props.handleInputChangeName(event)} />
                                            </div>
                                        </div>
                                        <div className="RichEditor-mozillaCursorWorkaround">&nbsp;</div>
                                    </div>
                                    <textarea aria-hidden="true" className="tweet-box-shadow hidden" name="status" defaultValue={""} />
                                </div>
                                <div className="TweetBoxToolbar" style={{}}>
                                    <div className="TweetBoxExtras tweet-box-extras">
                                        <span className="TweetBoxExtras-item TweetBox-mediaPicker"><div className="photo-selector">
                                            <button aria-hidden="true" className="btn icon-btn js-tooltip" type="button" tabIndex={-1} data-original-title="Add photos or video">
                                                <span className="tweet-camera Icon Icon--media" />
                                                <span className="text add-photo-label u-hiddenVisually">Add photos or video</span>
                                            </button>
                                            <div className="image-selector">
                                                <input type="hidden" name="media_data_empty" className="file-data" />
                                                <div className="multi-photo-data-container hidden">
                                                </div>
                                                <label className="t1-label">
                                                    <span className="visuallyhidden">Add photos or video</span>
                                                    <input type="file" name="media_empty" accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v" multiple className="file-input js-tooltip" data-original-title="Add photos or video" data-delay={150} />
                                                </label>
                                            </div>
                                        </div>
                                        </span>
                                        <span className="TweetBoxExtras-item"><div className="FoundMediaSearch found-media-search dropdown">
                                            <button className="btn js-found-media-search-trigger js-dropdown-toggle icon-btn js-tooltip" type="button" title="Add a GIF" data-delay={150}>
                                                <span className="Icon Icon--gif Icon--large" />
                                                <span className="text u-hiddenVisually">
                                                    Add a GIF
                                                </span>
                                            </button>
                                            <div className="FoundMediaSearch-dropdownMenu dropdown-menu" tabIndex={-1}>
                                                <div className="FoundMediaSearch-content Caret Caret--stroked">
                                                    <div className="FoundMediaSearch-query">
                                                        <input className="FoundMediaSearch-queryInput" type="text" autoComplete="off" placeholder="Search for a GIF" />
                                                        <span className="Icon Icon--search" />
                                                    </div>
                                                    <div className="FoundMediaSearch-results">
                                                        <div className="FoundMediaSearch-items" />
                                                        <div className="FoundMediaSearch-pagination" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </span>
                                        <span className="TweetBoxExtras-item"><div className="PollCreator">
                                            <button className="btn icon-btn PollCreator-btn js-tooltip" type="button" title="Add poll" data-delay={150} tabIndex={0}>
                                                <span className="PollCreator-icon Icon Icon--pollBar" />
                                                <span className="text PollCreator-label u-hiddenVisually">Poll</span>
                                            </button>
                                        </div>
                                        </span>
                                        <span style={{right:"50px",position:"absolute"}} className="TweetBoxExtras-item">
                                            <div className="PollCreator">
                                                <button type="button" className="btn btn-info" onClick = {() =>{this.props.sendPost()}}>
                                                    Send <span className="fa fa-send-o" style={{fontSize:"24px"}}></span>
                                                </button>
                                            </div>
                                        </span>
                                    </div>

                                </div>
                            </div>
                            <div style={{ position: 'absolute', visibility: 'hidden' }}><div><br /></div></div></div>
                    </div>
                </Dialog>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        postReducer: state.postReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    let content = '';
    return {
        handleCloseDialog: () => {
            dispatch({ type: OPEN_DIALOG_POST, open: false })
        },
        handleInputChangeName: (event) => {
            content = event.target.value;  
        },
        sendPost :()=>{
            if(content !== ''){
                var bytes  = CryptoJS.AES.decrypt(sessionStorage.getItem("secret_key"), 'CNM2018');
                const secret_key = bytes.toString(CryptoJS.enc.Utf8)
                const public_key = Keypair.fromSecret(secret_key).publicKey(); 
                axios.post('/post',{public_key, content}).then(res => {
                    let tx = res.data
                    tx.memo = Buffer.alloc(0)
                    tx.signature = Buffer.alloc(64, 0)
                    let buf = Buffer.from(tx.params.content)
                    tx.params.content = buf
                    transaction.sign(tx, secret_key) 
                    let txHash = '0x' + transaction.encode(tx).toString('hex')
                    axios.get("https://komodo.forest.network/broadcast_tx_commit?tx=" + txHash).then((response) => {})
                })
                dispatch({ type: OPEN_DIALOG_POST, open: false })
            }else{
                alert("Please,write something ...")
            }
            
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dialog_Post);