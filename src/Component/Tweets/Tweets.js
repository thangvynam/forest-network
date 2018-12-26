import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import DetailTweet from '../DetailTweet/DetailTweet'

class Tweets extends Component {
  state={
    open:false
  }
  clickTweets = event => {
    this.setState({open:true})
  };
  
  handleClose = event => {
    this.setState({open:false})
  };

  generateImge = () =>{
    if(this.props.operation == "create_account"){
      return (<img className="avatar js-action-profile-avatar" src="https://cdn2.iconfinder.com/data/icons/business-management-19/128/1-36-512.png" alt="test" />)
    }
    if(this.props.operation == "payment"){
      return (<img className="avatar js-action-profile-avatar" src="https://us.123rf.com/450wm/ahasoft2000/ahasoft20001608/ahasoft2000160800944/61236244-payment-icon-glyph-style-is-bicolor-flat-iconic-symbol-with-rounded-angles-eco-green-and-gray-colors.jpg?ver=6" alt="test" />)
    }
    if(this.props.operation == "post"){
      return (<img className="avatar js-action-profile-avatar" src="data:image/png;base64,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" alt="test" />)
    }
    if(this.props.operation == "interact"){
      return (<img className="avatar js-action-profile-avatar" src="https://interactofwake.org/wp-content/uploads/2016/10/donate.png" alt="test" />)
    }
    return (<img className="avatar js-action-profile-avatar" src="https://img.icons8.com/windows/1600/approve-and-update.png" alt="test" />)
  }

  render() {
    return (
      <div>
        <li onClick={this.clickTweets} className="js-stream-item stream-item stream-item" data-item-id={1068716577250406401} id="stream-item-tweet-1068716577250406401" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1068716577250406401&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}" >
          
          <div className="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content original-tweet js-original-tweet my-tweet " data-tweet-id={1068716577250406401} data-item-id={1068716577250406401} data-permalink-path="/NamThan82223837/status/1068716577250406401" data-conversation-id={1068716577250406401} data-can-be-self-threaded="true" data-tweet-nonce="1068716577250406401-a2709c24-0b93-42ec-93ae-16f316b36a68" data-tweet-stat-initialized="true" data-screen-name="NamThan82223837" data-name="Nam Thang" data-user-id={1068706177666580480} data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;1068706177666580480&quot;,&quot;screen_name&quot;:&quot;NamThan82223837&quot;,&quot;name&quot;:&quot;Nam Thang&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Nam Thang&quot;,&quot;emojified_text_as_html&quot;:&quot;Nam Thang&quot;}}]" data-disclosure-type data-tfb-view="/i/tfb/v1/quick_promote/1068716577250406401">
            <div className="context">
            </div>
            <div className="content">
              <div className="stream-item-header">
                <a className="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/NamThan82223837" data-user-id={1068706177666580480}>
                  {this.generateImge()}
                  <span className="FullNameGroup">
                    <strong className="fullname show-popup-with-id u-textTruncate " data-aria-label-part>{this.props.operation}</strong><span>‏</span><span className="UserBadges" /><span className="UserNameBreak">&nbsp;</span></span><span className="username u-dir u-textTruncate" dir="ltr" data-aria-label-part></span></a>
                <small className="time">
                  <a href="/NamThan82223837/status/1068716577250406401" className="tweet-timestamp js-permalink js-nav js-tooltip" data-conversation-id={1068716577250406401} data-original-title="8:01 PM - 30 Nov 2018"><span className="_timestamp js-short-timestamp js-relative-timestamp" data-time={1543636862} data-time-ms={1543636862000} data-long-form="true" aria-hidden="true">Sequence : {this.props.sequence}</span><span className="u-hiddenVisually" data-aria-label-part="last">3 hours ago</span></a>
                </small>
                <div className="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
                  <div className="dropdown">
                    <button className="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
                      <div className="IconContainer js-tooltip" data-original-title="More">
                        <span className="Icon Icon--caretDownLight Icon--small" />
                        <span className="u-hiddenVisually">More</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="js-tweet-text-container">
                <p className="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part={0}>Version : {this.props.version}</p>
               </div>
            
              <div className="stream-item-footer">
                <div className="ProfileTweet-actionCountList u-hiddenVisually">
                  <span className="ProfileTweet-action--reply u-hiddenVisually">
                    <span className="ProfileTweet-actionCount" aria-hidden="true" data-tweet-stat-count={0}>
                      <span className="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1068716577250406401">0 replies</span>
                    </span>
                  </span>
                  <span className="ProfileTweet-action--retweet u-hiddenVisually">
                    <span className="ProfileTweet-actionCount" aria-hidden="true" data-tweet-stat-count={0}>
                      <span className="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1068716577250406401">0 retweets</span>
                    </span>
                  </span>
                  <span className="ProfileTweet-action--favorite u-hiddenVisually">
                    <span className="ProfileTweet-actionCount" aria-hidden="true" data-tweet-stat-count={0}>
                      <span className="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1068716577250406401">0 likes</span>
                    </span>
                  </span>
                </div>
                <div className="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
                  <div className="ProfileTweet-action ProfileTweet-action--reply">
                    <button className="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1068716577250406401">
                      <div className="IconContainer js-tooltip" data-original-title="Reply">
                        <span className="Icon Icon--medium Icon--reply" />
                        <span className="u-hiddenVisually">Reply</span>
                      </div>
                      <span className="ProfileTweet-actionCount ProfileTweet-actionCount--isZero ">
                        <span className="ProfileTweet-actionCountForPresentation" aria-hidden="true" />
                        {/* {this.props.element.comment.length} */}
                      </span>
                    </button>
                  </div>
                  <div className="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
                    <button className="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1068716577250406401">
                      <div className="IconContainer js-tooltip" data-original-title="Retweet">
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
                    <button className="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1068716577250406401">
                      <div className="IconContainer js-tooltip" title="Like">
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
              </div>
            </div>
          </div>
        </li>
        <Dialog
          open={this.state.open}
          aria-labelledby="form-dialog-title"
          maxWidth="50px"
          >
          <DetailTweet element={this.props.element} name={this.props.name}/>
          <DialogActions>  
              <Button onClick={this.handleClose} color="primary">
                  Close
              </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clickTweets: () => {
      this.setState({open:true})
    },
    handleClose:()=>{
      this.setState({open:false})
  }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    tweetReducer: state.tweetReducer,
    detailTweetReducer:state.detailTweetReducer
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tweets);