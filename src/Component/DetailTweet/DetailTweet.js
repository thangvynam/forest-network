import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../Comment/Comment'
import axios from 'axios';
class DetailTweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content : ''
        };
        this.renderPost = this.renderPost.bind(this);
        this.renderUpdateName = this.renderUpdateName.bind(this);
    }
    renderPost() {
        if(this.props.element.operation == "post" ){
            axios.post('/get_content',{public_key:this.props.element.account, sequence: this.props.element.sequence}
                ).then(res => {
                    this.setState({content:res.data});
                })                    
        }
    }
    renderUpdateName() {
        if(this.props.element.operation == "update_account" && this.props.element.params.key == "name" ){
            let json = JSON.stringify(this.props.element.params.value.data)
            let buffer = Buffer.from(JSON.parse(json));
            let newName = buffer.toString('utf8');
            return (<p className=" TweetTextSize--jumbo js-tweet-text tweet-text" lang="en" data-aria-label-part={0}><b>New name :  </b> {newName}</p>)    
        }
    }
    render() {
        return (     
            <div className="permalink-container permalink-container--withArrows" >
                <div role="main" className="permalink light-inline-actions stream-uncapped original-permalink-page"> 
                    <div className="permalink-inner permalink-tweet-container">
                        <div className="tweet permalink-tweet js-actionable-user js-actionable-tweet js-original-tweet my-tweet logged-in no-replies js-initial-focus focus" data-associated-tweet-id={1068905065455316992} data-tweet-id={1068905065455316992} data-item-id={1068905065455316992} data-permalink-path="/NamThan82223837/status/1068905065455316992" data-conversation-id={1068905065455316992} data-can-be-self-threaded="true" data-tweet-nonce="1068905065455316992-adcc55ed-4711-43bf-893c-b5a32b8cfb30" data-tweet-stat-initialized="true" data-screen-name="NamThan82223837" data-name="Nam Thang" data-user-id={1068706177666580480} data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;1068706177666580480&quot;,&quot;screen_name&quot;:&quot;NamThan82223837&quot;,&quot;name&quot;:&quot;Nam Thang&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Nam Thang&quot;,&quot;emojified_text_as_html&quot;:&quot;Nam Thang&quot;}}]" data-disclosure-type data-tfb-view="/i/tfb/v1/quick_promote/1068905065455316992" tabIndex={0}>
                            <div className="content clearfix">
                                <div className="permalink-header">
                                    <a className="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/NamThan82223837" data-user-id={1068706177666580480}>
                                        <img className="avatar js-action-profile-avatar" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png" alt />
                                        <span className="FullNameGroup">
                                            <p className="TweetTextSize TweetTextSize--jumbo js-tweet-text tweet-text fullname show-popup-with-id u-textTruncate " style={{    paddingTop: "10px"}} data-aria-label-part>{this.props.element.operation}</p><span>‏</span><span className="UserBadges" /><span className="UserNameBreak">&nbsp;</span></span></a>
                                    <small className="time">
                                        <a href="/NamThan82223837/status/1068905065455316992" className="tweet-timestamp js-permalink js-nav js-tooltip" title="8:30 AM - 1 Dec 2018" data-conversation-id={1068905065455316992}><span className="_timestamp js-short-timestamp js-relative-timestamp" data-time={1543681801} data-time-ms={1543681801000} data-long-form="true" aria-hidden="true">11h</span><span className="u-hiddenVisually" data-aria-label-part="last">11 hours ago</span></a>
                                    </small>
                                </div>
                            </div>
                            <div className="js-tweet-text-container">
                                <p className=" TweetTextSize--jumbo js-tweet-text tweet-text" lang="en" data-aria-label-part={0}><b>From : </b>{this.props.element.account}</p>
                                {this.props.renderNotPostAndNotUpdate()}
                                {this.props.checkPayment()}
                                {this.renderPost()}
                                {this.renderUpdateName()}
                                <p className=" TweetTextSize--jumbo js-tweet-text tweet-text" lang="en" data-aria-label-part={0}><b>Version : </b> {this.props.element.version}</p>
                                <p className=" TweetTextSize--jumbo js-tweet-text tweet-text" lang="en" data-aria-label-part={0}><b>Sequence : </b> {this.props.element.sequence}</p>
                                <p className=" TweetTextSize--jumbo js-tweet-text tweet-text" lang="en" data-aria-label-part={0}>
                                    <b>{this.state.content == '' ? '':'Content :'  }</b> {this.state.content}
                                </p>
                            </div>
                            <div className="js-tweet-details-fixer tweet-details-fixer">
                                <div className="client-and-actions">
                                    <span className="metadata">
                                        <span>{this.props.element.time}</span>
                                    </span>
                                </div>
                                <div className="js-machine-translated-tweet-container" />
                                <div className="js-tweet-stats-container tweet-stats-container">
                                </div>
                            </div>
                            <div className="stream-item-footer">
                                <div className="ProfileTweet-actionCountList u-hiddenVisually">
                                    <span className="ProfileTweet-action--reply u-hiddenVisually">
                                        <span className="ProfileTweet-actionCount" aria-hidden="true" data-tweet-stat-count={0}>
                                            <span className="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1068905065455316992">0 replies</span>
                                        </span>
                                    </span>
                                    <span className="ProfileTweet-action--retweet u-hiddenVisually">
                                        <span className="ProfileTweet-actionCount" aria-hidden="true" data-tweet-stat-count={0}>
                                            <span className="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1068905065455316992">0 retweets</span>
                                        </span>
                                    </span>
                                    <span className="ProfileTweet-action--favorite u-hiddenVisually">
                                        <span className="ProfileTweet-actionCount" aria-hidden="true" data-tweet-stat-count={0}>
                                            <span className="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1068905065455316992">0 likes</span>
                                        </span>
                                    </span>
                                </div>
                                <div className="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
                                    <div className="ProfileTweet-action ProfileTweet-action--reply">
                                        <button className="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1068905065455316992">
                                            <div className="IconContainer js-tooltip" title="Reply">
                                                <span className="Icon Icon--medium Icon--reply" />
                                                <span className="u-hiddenVisually">Reply</span>
                                            </div>
                                            <span className="ProfileTweet-actionCount ProfileTweet-actionCount--isZero ">
                                                <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true" />
                                                
                                            </span>
                                        </button>
                                    </div>
                                    <div className="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
                                        <button className="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1068905065455316992">
                                            <div className="IconContainer js-tooltip" title="Retweet">
                                                <span className="Icon Icon--medium Icon--retweet" />
                                                <span className="u-hiddenVisually">Retweet</span>
                                            </div>
                                            <span className="ProfileTweet-actionCount ProfileTweet-actionCount--isZero">
                                                <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true" />
                                            </span>
                                        </button><button className="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
                                            <div className="IconContainer js-tooltip" title="Undo retweet">
                                                <span className="Icon Icon--medium Icon--retweet" />
                                                <span className="u-hiddenVisually">Retweeted</span>
                                            </div>
                                            <span className="ProfileTweet-actionCount ProfileTweet-actionCount--isZero">
                                                <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true" />
                                            </span>
                                        </button>
                                    </div>
                                    <div className="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
                                        <button className="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1068905065455316992">
                                            <div className="IconContainer js-tooltip" data-original-title="Like">
                                                <span role="presentation" className="Icon Icon--heart Icon--medium" />
                                                <div className="HeartAnimation" />
                                                <span className="u-hiddenVisually">Like</span>
                                            </div>
                                            <span className="ProfileTweet-actionCount ProfileTweet-actionCount--isZero">
                                                <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true" />
                                            </span>
                                        </button><button className="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
                                            <div className="IconContainer js-tooltip" title="Undo like">
                                                <span role="presentation" className="Icon Icon--heart Icon--medium" />
                                                <div className="HeartAnimation" />
                                                <span className="u-hiddenVisually">Liked</span>
                                            </div>
                                            <span className="ProfileTweet-actionCount ProfileTweet-actionCount--isZero">
                                                <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true" />
                                            </span>
                                        </button>
                                    </div>
                                    <div className="ProfileTweet-action ProfileTweet-action--analytics">
                                        <button className="ProfileTweet-actionButton u-textUserColorHover js-actionButton js-actionQuickPromote" type="button">
                                            <div className="IconContainer js-tooltip" title="View Tweet activity">
                                                <span className="Icon Icon--medium Icon--analytics" />
                                                <span className="u-hiddenVisually">View Tweet activity</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <hr/>
                                {/* <div className="comment">
                                    {
                                       this.props.element.comment.map((element,index)=>(
                                        <div className="row">
                                            <Comment  key={index}  image={element.image}
                                                        content={element.content}
                                                        name={element.name}
                                                        date={element.date}
                                                        time={element.time} />
                                        </div>
                                       )) 
                                    }
                                </div> */}
                            </div>
                            <div className="permalink-footer">
                            </div>
                        </div>
                    </div>
                    <div className="inline-reply-tweetbox-container">
                        <div className="inline-reply-tweetbox swift">
                            <form className="t1-form tweet-form condensed is-reply" method="post" target="tweet-post-iframe" action="//upload.twitter.com/i/tweet/create_with_media.iframe" encType="multipart/form-data" data-poll-composer-rows={3} data-previous-status-id-in-thread={1068905065455316992}>
                                <div className="reply-users" />
                                <div className="tweet-content">
                                    <img className="inline-reply-user-image avatar size32" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="Nam Thang" />
                                    <div className="ComposerDragHelp">
                                        <span className="ComposerDragHelp-text" />
                                    </div>
                                    <span className="visuallyhidden" id="tweet-box-reply-to-1068905065455316992-label">Tweet text</span>
                                    <div className="RichEditor RichEditor--emojiPicker">
                                        <div className="RichEditor-mozillaCursorWorkaround">&nbsp;</div>
                                        <div className="RichEditor-container u-borderRadiusInherit">
                                            <div role="listbox" className="dropdown-menu typeahead" id="typeahead-dropdown-10">
                                                <div aria-hidden="true" className="dropdown-caret">
                                                    <div className="caret-outer" />
                                                    <div className="caret-inner" />
                                                </div>
                                            </div>
                                            <div className="RichEditor-scrollContainer u-borderRadiusInherit">
                                                <textarea aria-labelledby="Tweetstorm-tweet-box-0-label Tweetstorm-tweet-box-0-text-label" name="tweet" className="tweet-box rich-editor is-showPlaceholder" contentEditable="true" spellCheck="true" role="textbox" aria-multiline="true"  data-placeholder-poll-composer-on="Ask a question..."  dir="ltr" aria-autocomplete="list" 
                                                    aria-expanded="false" aria-owns="typeahead-dropdown-6" style={{width:"100%"}}  placeholder="Write a comment..."  onChange={(event) => this.props.handleInput(event)} onKeyPress={(event) => this.props.handleKeyPress(event)} />
                                            </div>
                                        </div>
                                        <div className="RichEditor-mozillaCursorWorkaround">&nbsp;</div>
                                    </div>
                                
                                </div>
                                <div style={{ position: 'absolute', visibility: 'hidden' }}><div><br /></div></div></form>
                        </div>
                    </div>
                </div>
                <div className="permalink-footer">
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    let comment = '';
    return {
        checkPayment : () =>{
            if(ownProps.element.operation == "payment"){
                return (<p className=" TweetTextSize--jumbo js-tweet-text tweet-text" lang="en" data-aria-label-part={0}><b>Amount : </b>{ownProps.element.params.amount}</p>)
            }
        },
        renderNotPostAndNotUpdate : () =>{
            if(ownProps.element.operation == "create_account" || ownProps.element.operation == "payment"){
                return (<p className=" TweetTextSize--jumbo js-tweet-text tweet-text" lang="en" data-aria-label-part={0}><b>To : </b> {ownProps.element.params.address}</p>)
            }
        },
        handleInput :(event) =>{
            comment = event.target.value; 
        },
        handleKeyPress:(event) =>{
            if (event.key === 'Enter') {
                alert(comment)
            }
        }
        
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      detailTweetReducer:state.detailTweetReducer
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(DetailTweet);
