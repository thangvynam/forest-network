import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import CoverImage from '../CoverImage/CoverImage';

class Profile extends Component {
  render() {
    return (
      <div>
        <Nav />
        <CoverImage/>
        <div style={{marginTop:"50px"}}>
        <div className="AppContainer">
        <div  role="main" aria-labelledby="content-main-heading">
          <div className="Grid Grid--withGutter">
            <div className="Grid-cell u-size1of3 u-lg-size1of4">
              <div className="Grid Grid--withGutter">
                <div className="Grid-cell">
                  <div className="ProfileSidebar ProfileSidebar--withLeftAlignment">
                    <div className="ProfileHeaderCard">
                      <h1 className="ProfileHeaderCard-name">
                        <a href="/NamThan82223837" className="ProfileHeaderCard-nameLink u-textInheritColor js-nav">Nam Thang</a>
                      </h1>
                      <h2 className="ProfileHeaderCard-screenname u-inlineBlock u-dir" dir="ltr">
                        <a className="ProfileHeaderCard-screennameLink u-linkComplex js-nav" href="/NamThan82223837">
                          <span className="username u-dir" dir="ltr">@<b className="u-linkComplex-target">NamThan82223837</b></span>
                        </a>
                      </h2>
                      <p className="ProfileHeaderCard-bio u-dir" dir="ltr" />
                      <div className="ProfileHeaderCard-location u-hidden">
                        <span className="Icon Icon--geo Icon--medium" aria-hidden="true" role="presentation" />
                        <span className="ProfileHeaderCard-locationText u-dir" dir="ltr">
                        </span>
                      </div>
                      <div className="ProfileHeaderCard-url  u-hidden">
                        <span className="Icon Icon--url Icon--medium" aria-hidden="true" role="presentation" />
                        <span className="ProfileHeaderCard-urlText u-dir">
                        </span>
                      </div>
                      <div className="ProfileHeaderCard-joinDate">
                        <span className="Icon Icon--calendar Icon--medium" aria-hidden="true" role="presentation" />
                        <span className="ProfileHeaderCard-joinDateText js-tooltip u-dir" dir="ltr" data-original-title="7:19 PM - 30 Nov 2018">Joined December 2018</span>
                      </div>
                      <div className="ProfileHeaderCard-birthdate u-hidden">
                        <span className="Icon Icon--balloon Icon--medium" aria-hidden="true" role="presentation" />
                        <span className="ProfileHeaderCard-birthdateText u-dir" dir="ltr">
                        </span>
                      </div>
                    </div>
                    <div className="PhotoRail" style={{display: 'none'}}>
                      <div className="PhotoRail-heading">
                        <span className="Icon Icon--camera Icon--medium" aria-hidden="true" role="presentation" />
                        <span className="PhotoRail-headingText">
                          <a href="/NamThan82223837/media" className="PhotoRail-headingWithCount js-nav">
                            0 Photos and videos
                          </a>
                          <a href="/NamThan82223837/media" className="PhotoRail-headingWithoutCount js-nav">
                            Photos and videos
                          </a>
                        </span>
                      </div>
                      <div className="PhotoRail-mediaBox">
                        <span className="js-photoRailInsertPoint" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Grid-cell u-size2of3 u-lg-size3of4">
              <div className="Grid Grid--withGutter">
                <div className="Grid-cell">
                  <div className="js-profileClusterFollow" />
                </div>
                <div className="Grid-cell
                    u-lg-size2of3
              " data-test-selector="ProfileTimeline">
                  <div className="ProfileHeading">
                    <div className="ProfileHeading-spacer" />
                    <div className="ProfileHeading-content">
                      <h2 id="content-main-heading" className="ProfileHeading-title u-hiddenVisually ">Tweets</h2>
                      <ul className="ProfileHeading-toggle">
                        <li className="ProfileHeading-toggleItem  is-active" data-element-term="tweets_toggle">
                          <span aria-hidden="true">Tweets</span>
                          <span className="u-hiddenVisually">Tweets, current page.</span>
                        </li>
                        <li className="ProfileHeading-toggleItem  u-textUserColor" data-element-term="tweets_with_replies_toggle">
                          <a className="ProfileHeading-toggleLink js-nav" href="/NamThan82223837/with_replies" data-nav="tweets_with_replies_toggle">
                            Tweets &amp; replies
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ProfileWarningTimeline" data-element-context="blocked_profile">
                    <h2 className="ProfileWarningTimeline-heading" id="content-main-heading">You blocked <span className="username u-dir u-textTruncate" dir="ltr">@<b>NamThan82223837</b></span></h2>
                    <p className="ProfileWarningTimeline-explanation">Are you sure you want to view these Tweets? Viewing Tweets won't unblock <span className="username u-dir u-textTruncate" dir="ltr">@<b>NamThan82223837</b></span></p>
                    <button className="EdgeButton EdgeButton--tertiary ProfileWarningTimeline-button">Yes, view profile</button>
                  </div>
                  <div id="scroll-bump-dialog" className="ScrollBumpDialog modal-container">
                    <div className="modal draggable">
                      <div className="modal-content clearfix">
                        <button type="button" className="modal-btn modal-close js-close">
                          <span className="Icon Icon--close Icon--medium">
                            <span className="visuallyhidden">Close</span>
                          </span>
                        </button>
                        <div className="modal-header">
                          <h3 className="modal-title">
                            You followed
                          </h3>
                        </div>
                        <div className="modal-body">
                          <div className="loading">
                            <span className="spinner-bigger" />
                          </div>
                          <ol className="ScrollBumpDialog-usersList clearfix js-users-list" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="timeline" className="ProfileTimeline ">
                    <div className="stream-container  js-request-more-stream-items" data-max-position={1068716577250406401}>
                      <div className="stream-item js-new-items-bar-container">
                      </div>
                      <div className="stream">
                        <ol className="stream-items js-navigable-stream" id="stream-items-id">
                          <li className="js-stream-item stream-item stream-item
" data-item-id={1068716577250406401} id="stream-item-tweet-1068716577250406401" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1068716577250406401&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
                            <div className="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
      
       my-tweet 
" data-tweet-id={1068716577250406401} data-item-id={1068716577250406401} data-permalink-path="/NamThan82223837/status/1068716577250406401" data-conversation-id={1068716577250406401} data-can-be-self-threaded="true" data-tweet-nonce="1068716577250406401-a2709c24-0b93-42ec-93ae-16f316b36a68" data-tweet-stat-initialized="true" data-screen-name="NamThan82223837" data-name="Nam Thang" data-user-id={1068706177666580480} data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;1068706177666580480&quot;,&quot;screen_name&quot;:&quot;NamThan82223837&quot;,&quot;name&quot;:&quot;Nam Thang&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Nam Thang&quot;,&quot;emojified_text_as_html&quot;:&quot;Nam Thang&quot;}}]" data-disclosure-type data-tfb-view="/i/tfb/v1/quick_promote/1068716577250406401">
                              <div className="context">
                              </div>
                              <div className="content">
                                <div className="stream-item-header">
                                  <a className="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/NamThan82223837" data-user-id={1068706177666580480}>
                                    <img className="avatar js-action-profile-avatar" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png" alt />
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
                                      <div className="dropdown-menu is-autoCentered">
                                        <div className="dropdown-caret">
                                          <div className="caret-outer" />
                                          <div className="caret-inner" />
                                        </div>
                                        <ul>
                                          <li className="share-via-dm js-actionShareViaDM" data-nav="share_tweet_dm">
                                            <button type="button" className="dropdown-link">Share via Direct Message</button>
                                          </li>
                                          <li className="copy-link-to-tweet js-actionCopyLinkToTweet">
                                            <button type="button" className="dropdown-link">Copy link to Tweet</button>
                                          </li>
                                          <li className="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
                                            <button type="button" className="dropdown-link">Embed Tweet</button>
                                          </li>
                                          <li className="user-pin-tweet js-actionPinTweet" data-nav="user_pin_tweet">
                                            <button type="button" className="dropdown-link">Pin to your profile page</button>
                                          </li>
                                          <li className="user-unpin-tweet js-actionPinTweet" data-nav="user_unpin_tweet">
                                            <button type="button" className="dropdown-link">Unpin from profile page</button>
                                          </li>
                                          <li className="js-actionDelete">
                                            <button type="button" className="dropdown-link">Delete Tweet</button>
                                          </li>
                                          <li className="dropdown-divider" />
                                          <li className="js-actionMomentMakerAddTweetToOtherMoment MomentMakerAddTweetToOtherMoment">
                                            <button type="button" className="dropdown-link">Add to other Moment</button>
                                          </li>
                                          <li className="js-actionMomentMakerCreateMoment">
                                            <button type="button" className="dropdown-link">Add to new Moment</button>
                                          </li>
                                        </ul>
                                      </div>
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
                            <div className="dismiss-module">
                              <div className="dismissed-module">
                                <div className="feedback-actions">
                                  <div className="feedback-action" data-feedback-type="DontLike" data-feedback-url>
                                    <div className="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
                                      <span className="undo-action">Undo</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="child-feedback-confirmation">
                                  <div className="child-confirmation-item">
                                    <span className="child-confirmation-text" />
                                    <span className="undo-child-feedback-action">Undo</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ol>
                        <div className="stream-footer">
                          <div className="timeline-end has-items">
                            <div className="stream-end">
                              <div className="stream-end-inner">
                                <span className="Icon Icon--large Icon--logo" />
                                <p className="empty-text">
                                  You haven't Tweeted yet.
                                </p>
                                <p><button type="button" className="btn-link back-to-top hidden">Back to top ↑</button></p>
                              </div>
                            </div>
                            <div className="stream-loading">
                              <div className="stream-end-inner">
                                <span className="spinner" title="Loading..." />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="stream-fail-container u-hidden" style={{display: 'none'}}>
                          <div className="js-stream-whale-end stream-whale-end stream-placeholder centered-placeholder">
                            <div className="stream-end-inner">
                              <h2 className="title">Loading seems to be taking a while.</h2>
                              <p>
                                Twitter may be over capacity or experiencing a momentary hiccup. <a role="button" href="#" className="try-again-after-whale">Try again</a> or visit <a target="_blank" href="http://status.twitter.com" rel="noopener">Twitter Status</a> for more information.
                              </p>
                            </div>
                          </div>
                        </div>
                        <ol className="hidden-replies-container" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Grid-cell u-size1of3">
                  <div className="Grid Grid--withGutter">
                    <div className="Grid-cell">
                      <div className="ProfileSidebar ProfileSidebar--withRightAlignment">
                        <div className="MoveableModule">
                          <div className="SidebarCommonModules">
                            <div className="module wtf-module js-wtf-module roaming-module">
                              <div className="flex-module">
                                <div className="flex-module-header">
                                  <h3>Who to follow</h3>
                                  <small>· </small>
                                  <button type="button" className="btn-link js-refresh-suggestions"><small>Refresh</small></button>
                                  <small className="view-all">· <a className="js-view-all-link js-nav" href="/who_to_follow/suggestions" data-element-term="view_all_link">View all</a></small>
                                </div>
                                <div className="js-recommended-followers dashboard-user-recommendations flex-module-inner" data-section-id="wtf">
                                </div>
                              </div>
                              <div className="flex-module">
                                <div className="flex-module-footer">
                                  <a href="/who_to_follow/import" className="js-find-friends-link js-nav" data-element-term="import_link">
                                    <span className="Icon Icon--small Icon--people" />Find people you know
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="module Trends trends">
                              <div className="trends-inner"><div className="flex-module trends-container context-trends-container">
                                  <div className="flex-module-header">
                                    <h3><span className="trend-location js-trend-location">Trends for you</span></h3>
                                    <span className="middot" aria-hidden="true">·</span>
                                    <a role="button" href="#" data-modal="change-trends" className="btn-link change-trends js-trend-toggle">
                                      <span aria-hidden="true">Change</span>
                                      <span className="u-hiddenVisually">Change trend settings</span>
                                    </a>
                                  </div>
                                  <div className="flex-module-inner">
                                    <ul className="trend-items js-trends">
                                      <li className="trend-item js-trend-item  context-trend-item" data-trend-name="jordan trainer st g" data-trends-id={-8792005390795606036} data-trend-token=":tailored_request:entity_trend:taxi_country_source:">
                                        <a className="pretty-link js-nav js-tooltip u-linkComplex " href="/search?q=%22jordan%20trainer%20st%20g%22&src=tren" data-query-source="trend_click">
                                          <span className="u-linkComplex-target trend-name" dir="ltr">jordan trainer st g</span>
                                          <div className="js-nav trend-item-context" />
                                          <div className="js-nav trend-item-stats">
                                          </div>
                                        </a>
                                      </li>
                                      <li className="trend-item js-trend-item  context-trend-item" data-trend-name="deep royal blue" data-trends-id={-8792005390795606036} data-trend-token=":tailored_request:entity_trend:taxi_country_source:">
                                        <a className="pretty-link js-nav js-tooltip u-linkComplex " href="/search?q=%22deep%20royal%20blue%22&src=tren" data-query-source="trend_click">
                                          <span className="u-linkComplex-target trend-name" dir="ltr">deep royal blue</span>
                                          <div className="js-nav trend-item-context" />
                                          <div className="js-nav trend-item-stats">
                                          </div>
                                        </a>
                                      </li>
                                      <li className="trend-item js-trend-item  context-trend-item" data-trend-name="air jordan 1 retro high" data-trends-id={-8792005390795606036} data-trend-token=":tailored_request:entity_trend:taxi_country_source:">
                                        <a className="pretty-link js-nav js-tooltip u-linkComplex " href="/search?q=%22air%20jordan%201%20retro%20high%22&src=tren" data-query-source="trend_click">
                                          <span className="u-linkComplex-target trend-name" dir="ltr">air jordan 1 retro high</span>
                                          <div className="js-nav trend-item-context" />
                                          <div className="js-nav trend-item-stats">
                                          </div>
                                        </a>
                                      </li>
                                      <li className="trend-item js-trend-item  context-trend-item" data-trend-name="George H.W. Bush" data-trends-id={-8792005390795606036} data-trend-token=":tailored_request:entity_trend:taxi_worldwide_source:tweet_count_100000_1000000_metadescription:">
                                        <a className="pretty-link js-nav js-tooltip u-linkComplex " href="/search?q=%22George%20H.W.%20Bush%22&src=tren" data-query-source="trend_click">
                                          <span className="u-linkComplex-target trend-name" dir="ltr">George H.W. Bush</span>
                                          <div className="js-nav trend-item-context" />
                                          <div className="js-nav trend-item-stats">
                                            218K Tweets
                                          </div>
                                        </a>
                                      </li>
                                      <li className="trend-item js-trend-item  context-trend-item" data-trend-name="George Bush" data-trends-id={-8792005390795606036} data-trend-token=":tailored_request:entity_trend:taxi_worldwide_source:tweet_count_100000_1000000_metadescription:">
                                        <a className="pretty-link js-nav js-tooltip u-linkComplex " href="/search?q=%22George%20Bush%22&src=tren" data-query-source="trend_click">
                                          <span className="u-linkComplex-target trend-name" dir="ltr">George Bush</span>
                                          <div className="js-nav trend-item-context" />
                                          <div className="js-nav trend-item-stats">
                                            314K Tweets
                                          </div>
                                        </a>
                                      </li>
                                      <li className="trend-item js-trend-item  context-trend-item" data-trend-name="President Bush" data-trends-id={-8792005390795606036} data-trend-token=":tailored_request:entity_trend:taxi_worldwide_source:tweet_count_100000_1000000_metadescription:">
                                        <a className="pretty-link js-nav js-tooltip u-linkComplex " href="/search?q=%22President%20Bush%22&src=tren" data-query-source="trend_click">
                                          <span className="u-linkComplex-target trend-name" dir="ltr">President Bush</span>
                                          <div className="js-nav trend-item-context" />
                                          <div className="js-nav trend-item-stats">
                                            199K Tweets
                                          </div>
                                        </a>
                                      </li>
                                      <li className="trend-item js-trend-item  context-trend-item" data-trend-name="#Teleton2018" data-trends-id={-8792005390795606036} data-trend-token=":tailored_request:hashtag_trend:taxi_worldwide_source:tweet_count_10000_100000_metadescription:">
                                        <a className="pretty-link js-nav js-tooltip u-linkComplex " href="/hashtag/Teleton2018?src=tren" data-query-source="trend_click">
                                          <span className="u-linkComplex-target trend-name" dir="ltr">#Teleton2018</span>
                                          <div className="js-nav trend-item-context" />
                                          <div className="js-nav trend-item-stats">
                                            43.4K Tweets
                                          </div>
                                        </a>
                                      </li>
                                      <li className="trend-item js-trend-item  context-trend-item" data-trend-name="#AdiósColosal" data-trends-id={-8792005390795606036} data-trend-token=":tailored_request:hashtag_trend:taxi_worldwide_source:tweet_count_10000_100000_metadescription:">
                                        <a className="pretty-link js-nav js-tooltip u-linkComplex " href="/hashtag/Adi%C3%B3sColosal?src=tren" data-query-source="trend_click">
                                          <span className="u-linkComplex-target trend-name" dir="ltr">#AdiósColosal</span>
                                          <div className="js-nav trend-item-context" />
                                          <div className="js-nav trend-item-stats">
                                            46.3K Tweets
                                          </div>
                                        </a>
                                      </li>
                                      <li className="trend-item js-trend-item  context-trend-item" data-trend-name="Kareem Hunt" data-trends-id={-8792005390795606036} data-trend-token=":tailored_request:entity_trend:taxi_worldwide_source:tweet_count_100000_1000000_metadescription:">
                                        <a className="pretty-link js-nav js-tooltip u-linkComplex " href="/search?q=%22Kareem%20Hunt%22&src=tren" data-query-source="trend_click">
                                          <span className="u-linkComplex-target trend-name" dir="ltr">Kareem Hunt</span>
                                          <div className="js-nav trend-item-context" />
                                          <div className="js-nav trend-item-stats">
                                            222K Tweets
                                          </div>
                                        </a>
                                      </li>
                                      <li className="trend-item js-trend-item  context-trend-item" data-trend-name="Barbara" data-trends-id={-8792005390795606036} data-trend-token=":tailored_request:entity_trend:taxi_worldwide_source:tweet_count_10000_100000_metadescription:">
                                        <a className="pretty-link js-nav js-tooltip u-linkComplex " href="/search?q=Barbara&src=tren" data-query-source="trend_click">
                                          <span className="u-linkComplex-target trend-name" dir="ltr">Barbara</span>
                                          <div className="js-nav trend-item-context" />
                                          <div className="js-nav trend-item-stats">
                                            74.6K Tweets
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="Footer module roaming-module Footer--slim Footer--blankBackground">
                              <div className="flex-module">
                                <div className="flex-module-inner js-items-container">
                                  <ul className="u-cf">
                                    <li className="Footer-item Footer-copyright copyright">© 2018 Twitter</li>
                                    <li className="Footer-item"><a className="Footer-link" href="/about" rel="noopener">About</a></li>
                                    <li className="Footer-item"><a className="Footer-link" href="//support.twitter.com" rel="noopener">Help Center</a></li>
                                    <li className="Footer-item"><a className="Footer-link" href="/tos" rel="noopener">Terms</a></li>
                                    <li className="Footer-item"><a className="Footer-link" href="/privacy" rel="noopener">Privacy policy</a></li>
                                    <li className="Footer-item"><a className="Footer-link" href="//support.twitter.com/articles/20170514" rel="noopener">Cookies</a></li>
                                    <li className="Footer-item"><a className="Footer-link" href="//support.twitter.com/articles/20170451" rel="noopener">Ads info</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        
      </div>
    );
  }
}

export default Profile;