import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Nav from '../Nav/Nav';
import CoverImage from '../CoverImage/CoverImage';
import Dialog_CreateAccount from '../Dialog_CreateAccount/Dialog_CreateAccount';
import Tweets from '../Tweets/Tweets';
import {SAVE_TRANSACTION} from '../../Constant/actionTypes';
import { OPEN_DIALOG_CREATE_ACCOUNT } from '../../Constant/actionTypes';
import { OPEN_DIALOG_POST} from '../../Constant/actionTypes';
import { OPEN_DIALOG_PAYMENT} from '../../Constant/actionTypes';
import Dialog_Post from '../Dialog_Post/Dialog_Post';
import Dialog_Payment from '../Dialog_Payment/Dialog_Payment';

class Profile extends Component {
  getTransaction = () =>
  axios.post('/getdata', {public_key: this.props.public_key})
    .then((res)=> res.data)

  componentDidMount(){
    if(this.props.detailTweetReducer.tweet.length == 0){
      this.getTransaction().then((res)=>{
        this.props.saveTransaction(res)
      })
    }
  }
  render() {
    this.getTransaction()
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
                        <a href="/NamThan82223837" className="ProfileHeaderCard-nameLink u-textInheritColor js-nav">{this.props.detailTweetReducer.name}</a>
                      </h1>
                      <p className="ProfileHeaderCard-bio u-dir" dir="ltr" />
                      <div class="ProfileHeaderCard-location">
                        <span class="Icon Icon--geo Icon--medium" aria-hidden="true" role="presentation"></span>
                        <span class="ProfileHeaderCard-locationText u-dir" dir="ltr">  <a href="/search?q=place%3A2371490f9d073edc" data-place-id="2371490f9d073edc">{this.props.detailTweetReducer.location}</a></span>
                      </div>
                      <div class="ProfileHeaderCard-location">
                        <span class="fa fa-money"></span>
                        <span class="ProfileHeaderCard-locationText u-dir" dir="ltr">  <a href="/search?q=place%3A2371490f9d073edc" data-place-id="2371490f9d073edc">{this.props.detailTweetReducer.amount}</a></span>
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
                  <div id="timeline" className="ProfileTimeline ">
                    <div className="stream-container  js-request-more-stream-items" data-max-position={1068716577250406401}>
                      <div className="stream-item js-new-items-bar-container">
                      </div>
                      <div className="stream">
                        <ol className="stream-items js-navigable-stream" id="stream-items-id">
                          {
                             this.props.detailTweetReducer.tweet.map((element,index)=>(
                              <Tweets operation={element.operation} version={element.version} sequence={element.sequence} element={element} />
                             ))
                          }
                         
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
                                Twitter may be over capacity or experiencing a momentary hiccup. <a role="button" href="#test" className="try-again-after-whale">Try again</a> or visit <a  href="http://status.twitter.com" rel="noopener">Twitter Status</a> for more information.
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
                                    <h3><span className="trend-location js-trend-location">Actions</span></h3>
                                  </div>
                                  <div className="flex-module-inner">
                                    <ul className="trend-items js-trends">
                                        <li role="complementary" aria-labelledby="global-new-tweet-button" className="topbar-tweet-btn">
                                          <button id="global-new-tweet-button" className="js-global-new-tweet js-tooltip EdgeButton EdgeButton--primary js-dynamic-tooltip"
                                          data-placement="bottom" data-component-context="new_tweet_button" data-original-title  onClick={this.props.openDialogCreateAccount}>
                                            <span className="text">Create Account</span>
                                          </button>
                                        </li>
                                        <br/>
                                        <li role="complementary" aria-labelledby="global-new-tweet-button" className="topbar-tweet-btn">
                                          <button id="global-new-tweet-button" className="js-global-new-tweet js-tooltip EdgeButton EdgeButton--primary js-dynamic-tooltip"
                                          data-placement="bottom" data-component-context="new_tweet_button" data-original-title  onClick={this.props.handleOpenDialogPost}>
                                            <span className="text">Post</span>
                                          </button>
                                        </li>
                                        <br/>
                                        <li role="complementary" aria-labelledby="global-new-tweet-button" className="topbar-tweet-btn">
                                          <button id="global-new-tweet-button" className="js-global-new-tweet js-tooltip EdgeButton EdgeButton--primary js-dynamic-tooltip"
                                          data-placement="bottom" data-component-context="new_tweet_button" data-original-title  onClick={this.props.handleOpenDialogPayment}>
                                            <span className="text">Pay</span>
                                          </button>
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
    <Dialog_CreateAccount public_key={this.props.public_key}
                          secret_key={this.props.secret_key}/>    
    <Dialog_Post/>
    <Dialog_Payment/>
  </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    coverImageReducer: state.coverImageReducer,
    detailTweetReducer:state.detailTweetReducer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveTransaction: (res) => {
      console.log(res)
      dispatch({ type: SAVE_TRANSACTION, res: res })
    },
    openDialogCreateAccount : ()=>{
      dispatch({ type: OPEN_DIALOG_CREATE_ACCOUNT, openDialog: true })
    },
    handleOpenDialogPost: () => {
      dispatch({ type: OPEN_DIALOG_POST, open: true })
    },
    handleOpenDialogPayment: () => {
      dispatch({ type: OPEN_DIALOG_PAYMENT, open: true })
    },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile);