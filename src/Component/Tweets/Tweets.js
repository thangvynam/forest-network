import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';

import DetailTweet from '../DetailTweet/DetailTweet'
import { OPEN_DIALOG_TWEET } from '../../Constant/actionTypes';
class Tweets extends Component {
  render() {
    return (
      <div>
        <li onClick={this.props.clickTweets} className="js-stream-item stream-item stream-item" data-item-id={1068716577250406401} id="stream-item-tweet-1068716577250406401" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1068716577250406401&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}" >
          
          <div className="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content original-tweet js-original-tweet my-tweet " data-tweet-id={1068716577250406401} data-item-id={1068716577250406401} data-permalink-path="/NamThan82223837/status/1068716577250406401" data-conversation-id={1068716577250406401} data-can-be-self-threaded="true" data-tweet-nonce="1068716577250406401-a2709c24-0b93-42ec-93ae-16f316b36a68" data-tweet-stat-initialized="true" data-screen-name="NamThan82223837" data-name="Nam Thang" data-user-id={1068706177666580480} data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;1068706177666580480&quot;,&quot;screen_name&quot;:&quot;NamThan82223837&quot;,&quot;name&quot;:&quot;Nam Thang&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Nam Thang&quot;,&quot;emojified_text_as_html&quot;:&quot;Nam Thang&quot;}}]" data-disclosure-type data-tfb-view="/i/tfb/v1/quick_promote/1068716577250406401">
            <div className="context">
            </div>
            <div className="content">
              <div className="stream-item-header">
                <a className="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/NamThan82223837" data-user-id={1068706177666580480}>
                  <img className="avatar js-action-profile-avatar" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png" alt="test" />
                  <span className="FullNameGroup">
                    <strong className="fullname show-popup-with-id u-textTruncate " data-aria-label-part>Nam Thang</strong><span>‏</span><span className="UserBadges" /><span className="UserNameBreak">&nbsp;</span></span><span className="username u-dir u-textTruncate" dir="ltr" data-aria-label-part>@<b>NamThan82223837</b></span></a>
                <small className="time">
                  <a href="/NamThan82223837/status/1068716577250406401" className="tweet-timestamp js-permalink js-nav js-tooltip" data-conversation-id={1068716577250406401} data-original-title="8:01 PM - 30 Nov 2018"><span className="_timestamp js-short-timestamp js-relative-timestamp" data-time={1543636862} data-time-ms={1543636862000} data-long-form="true" aria-hidden="true">3h</span><span className="u-hiddenVisually" data-aria-label-part="last">3 hours ago</span></a>
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
                <p className="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part={0}>Just setting up my Twitter. <a href="/hashtag/myfirstTweet?src=hash" data-query-source="hashtag_click" className="twitter-hashtag pretty-link js-nav" dir="ltr"><s>#</s><b>myfirstTweet</b></a></p>
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
          open={this.props.tweetReducer.open}
          aria-labelledby="form-dialog-title"
          maxWidth="50px"
          >
          <DetailTweet/>
        </Dialog>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clickTweets: () => {

      dispatch({ type: OPEN_DIALOG_TWEET, open: true })
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    tweetReducer: state.tweetReducer
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tweets);