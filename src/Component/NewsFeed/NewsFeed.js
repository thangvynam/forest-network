import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import {SAVE_TRANSACTION_NEWSFEED,SAVE_TRANSACTION, STORE_FOLLOW} from '../../Constant/actionTypes';
import { OPEN_DIALOG_CREATE_ACCOUNT,SAVE_PUBLIC_KEY } from '../../Constant/actionTypes';
import { OPEN_DIALOG_POST} from '../../Constant/actionTypes';
import { OPEN_DIALOG_PAYMENT,DO_LOGIN,STORE_IMAGE} from '../../Constant/actionTypes';
import Nav from '../Nav/Nav';
import Tweets from '../Tweets/Tweets';
import Dialog_Post from '../Dialog_Post/Dialog_Post';
import Dialog_Payment from '../Dialog_Payment/Dialog_Payment';
import Dialog_CreateAccount from '../Dialog_CreateAccount/Dialog_CreateAccount';
const {Keypair} = require('stellar-base');
const CryptoJS = require("crypto-js")

class NewsFeed extends Component {
    state={
      followPersons:[]
    }
    constructor(props) {
      super(props);
    }
    getTransaction = (public_key) =>
        axios.post('/getdata', { public_key: public_key })
            .then((res) => res.data)

    componentDidMount() {
        this.props.refreshNewsFeed();
        let finalList = [];
        axios.get('/login')
          .then((res) => {
            if (res.data.isLogin) {
              this.props.savePublicKey(res.data.clientPublicKey);
              this.props.login(res.data)     
              var bytes  = CryptoJS.AES.decrypt(sessionStorage.getItem("secret_key"), 'CNM2018');
              const secret_key = bytes.toString(CryptoJS.enc.Utf8)
              const public_key = Keypair.fromSecret(secret_key).publicKey();
              this.getTransaction(res.data.clientPublicKey).then((res)=>{
                this.props.saveTransactionProfile(res)
              })
              axios.post('/getImage', {public_key})
                   .then((res) => {
                      let src = 'data:image/jpeg;base64,' + res.data;
                      this.props.saveImg(src)
                    })
              axios.post("/getFollow", {public_key})
                   .then(res => {
                      this.props.storeFollow(res.data)
                    })
                    .then(()=>{
                      let tempList = []
                      this.props.followReducer.followList.map((element,index)=>{
                        this.getTransaction(element)
                            .then((res) => {
                              tempList.push(res);
                              this.setState({followPersons:tempList})
                            })
                            .then(()=>{          
                                let reverseList = this.state.followPersons[this.state.followPersons.length-1];
                                for(let j = 0 ;j< reverseList.length;j++){
                                  if(j == 20){// track follow 20 the lastest post 
                                    break;
                                  } 
                                  finalList.push(reverseList[j])
                                }
                                this.props.saveTransaction(finalList)
                            })  
                      })
                      
                    })
            }
          })
    }
    render() {
        if(this.props.loginReducer.isLogin === false){
            return (<Redirect to="/login"/>)
        }
        //alert(this.props.detailTweetReducer.name)
        if(this.props.detailTweetReducer.update){
          this.getTransaction()
          return (
              <div>
                  <Nav />
                  <div className="dashboard dashboard-left" style={{ marginLeft: "14px" }}>
                      <div className="DashboardProfileCard  module">
                          <a className="DashboardProfileCard-bg u-bgUserColor u-block" tabIndex={-1} aria-hidden="true" rel="noopener">
                          </a>
                          <div className="DashboardProfileCard-content">
                              <div className="DashboardProfileCard-avatarContainer">
                                  <div id="choose-photo" className="controls avatar-settings inline-upload-avatar dropdown center">
                                      <a className="DashboardProfileCard-avatarLink ProfileAvatar-placeholder u-inlineBlock js-nav js-tooltip profile-picture js-dropdown-toggle" href="/NamThan82223837" tabIndex={-1} aria-hidden="true" data-placement="top" data-scribe-element="profile_avatar" role="button" aria-haspopup="true" data-original-title="Add a profile photo">
                                      <img  src={this.props.coverImageReducer.imgSrc} style={{width: '80px', height:'80px', borderRadius: '50%'}} />
                                      </a>
                                  </div>
                              </div>
                              <div className="DashboardProfileCard-userFields account-group">
                                  <div className="DashboardProfileCard-name u-textTruncate">
                                      <a className="u-textInheritColor js-nav" rel="noopener">{this.props.detailTweetReducer.name}</a><span className="UserBadges" />
                                  </div>
                              </div>
                              <div className="ProfileCardStats">
                                  <ul className="ProfileCardStats-statList Arrange Arrange--bottom Arrange--equal"><li className="ProfileCardStats-stat Arrange-sizeFit">
                                      <a className="ProfileCardStats-statLink u-textUserColor u-linkClean u-block js-nav js-tooltip" href="/NamThan82223837" data-element-term="tweet_stats" data-original-title="3 Tweets">
                                          <span className="ProfileCardStats-statLabel u-block">Tweets</span>
                                          <span className="ProfileCardStats-statValue" data-count={3} data-is-compact="false">
                                              {this.props.detailTweetReducer.tweet.length}
                                          </span>
                                      </a>
                                  </li><li className="ProfileCardStats-stat Arrange-sizeFit">
                                          <a className="ProfileCardStats-statLink u-textUserColor u-linkClean u-block js-nav js-tooltip" href="/NamThan82223837/following" data-element-term="following_stats" data-original-title="1 Following">
                                              <span className="ProfileCardStats-statLabel u-block">Following</span>
                                              <span className="ProfileCardStats-statValue" data-count={1} data-is-compact="false">{this.props.followReducer.followList.length}</span>
                                          </a>
                                      </li>
                                  </ul>
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
                              this.props.detailTweetReducer.tweetNewsfeed.map((element,index)=>(
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
              <Dialog_CreateAccount public_key={this.props.loginReducer.public_key}
                            secret_key={this.props.loginReducer.secret_key}/>    
              <Dialog_Post/>
              <Dialog_Payment/>
              </div>
          );
        }
      return "";
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        saveTransaction: (res) => {
            dispatch({ type: SAVE_TRANSACTION_NEWSFEED, res: res })
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
        login: (res) => {
            dispatch({type: DO_LOGIN, isLogin: true, public_key: res.clientPublicKey})
        },
        savePublicKey: (public_key) =>{
          
          dispatch({type: SAVE_PUBLIC_KEY, public_key: public_key})
        },
        saveImg: (src) => {
          dispatch({type: STORE_IMAGE, imgSrc: src})
        },
        storeFollow: (follow) => {
          dispatch({type: STORE_FOLLOW, followList: follow})
        },
        saveTransactionProfile:(res)=>{
          dispatch({ type: SAVE_TRANSACTION, res: res })
        },
        refreshNewsFeed:()=>{
          dispatch({ type: SAVE_TRANSACTION_NEWSFEED, res: [] })
        }
        
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        detailTweetReducer: state.detailTweetReducer,
        loginReducer: state.loginReducer,
        coverImageReducer: state.coverImageReducer,
        followReducer: state.followReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);