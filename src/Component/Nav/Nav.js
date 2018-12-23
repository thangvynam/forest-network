import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import { DO_LOGIN } from '../../Constant/actionTypes';
class Nav extends Component {
    render() {
        return (
            <div className="topbar js-topbar">
            <div className="ProfilePage-editingOverlay" />
            <div className="global-nav" data-section-term="top_nav">
              <div className="global-nav-inner">
                <div className="container">
                  <h1 className="Icon Icon--bird bird-topbar-etched">
                    <span className="visuallyhidden">Twitter</span>
                  </h1><div className="pushstate-spinner" />
                  <div role="navigation" style={{display: 'inline-block'}}><ul className="nav js-global-actions" id="global-actions"><li id="global-nav-home" className="home" data-global-action="home">
                        <a className="js-nav js-tooltip js-dynamic-tooltip" data-placement="bottom" href="/" data-component-context="home_nav" data-nav="home" data-original-title>
                            <span className="Icon Icon--home Icon--large" />
                            <span className="Icon Icon--homeFilled Icon--large u-textUserColor" />
                            <span className="text" aria-hidden="true">
                              <NavLink className="text" to="/home"/> Home
                            </span>
                         
                        </a>
                      </li><li className="people notifications" data-global-action="connect">
                        <a className="js-nav js-tooltip js-dynamic-tooltip" data-placement="bottom" href="/i/notifications" data-component-context="connect_nav" data-nav="connect" data-original-title>
                          <span className="Icon Icon--notifications Icon--large" />
                          <span className="Icon Icon--notificationsFilled Icon--large u-textUserColor" />
                          <span className="text" aria-hidden="true">Notifications</span>
                          
                          <span className="count">
                            <span className="count-inner">0</span>
                          </span>
                        </a>
                      </li><li className="dm-nav">
                        <a role="button" href="#test" className="js-tooltip js-dynamic-tooltip global-dm-nav" data-placement="bottom" data-original-title>
                          <span className="Icon Icon--dm Icon--large" />
                          <span className="text">Messages</span>
                          <span className="dm-new"><span className="count-inner" /></span>
                        </a>
                      </li></ul>
                  </div>
                  <div className="pull-right nav-extras">
                    <div role="search">
                      <form className="t1-form form-search js-search-form" action="/search" id="global-nav-search">
                        <label className="visuallyhidden" htmlFor="search-query">Search query</label>
                        <input className="search-input" type="text" id="search-query" placeholder="Search Twitter" name="q" autoComplete="off" spellCheck="false" aria-autocomplete="list"  aria-owns="typeahead-dropdown-13" />
                        <span className="search-icon js-search-action">
                          <button type="submit" className="Icon Icon--medium Icon--search nav-search" tabIndex={-1}>
                            <span className="visuallyhidden">Search Twitter</span>
                          </button>
                        </span>
                        <div role="listbox" className="dropdown-menu typeahead" id="typeahead-dropdown-13">
                          <div aria-hidden="true" className="dropdown-caret">
                            <div className="caret-outer" />
                            <div className="caret-inner" />
                          </div>
                          <div role="presentation" className="dropdown-inner js-typeahead-results"><div role="presentation" className="typeahead-recent-searches block0">
                              <h3 id="recent-searches-heading" className="typeahead-category-title recent-searches-title" style={{display: 'none'}}>Recent searches</h3><button type="button" tabIndex={-1} className="btn-link clear-recent-searches" style={{display: 'none'}}>Clear</button>
                              <ul role="presentation" className="typeahead-items recent-searches-list" />
                            </div><div role="presentation" className="typeahead-saved-searches block2">
                              <h3 id="saved-searches-heading" className="typeahead-category-title saved-searches-title" style={{display: 'none'}}>Saved searches</h3>
                              <ul role="presentation" className="typeahead-items saved-searches-list" />
                            </div><ul role="presentation" className="typeahead-items typeahead-topics block3" style={{display: 'none'}} /><ul role="presentation" className="typeahead-items typeahead-accounts social-context js-typeahead-accounts block4" style={{display: 'none'}}>
                              <li role="presentation" className="js-selectable typeahead-accounts-shortcut js-shortcut"><a role="option" className="js-nav" href data-search-query data-query-source="typeahead_click" data-shortcut="true" data-ds="account_search" id="typeahead-item-0" /></li>
                            </ul></div>
                        </div>
                      </form>
                    </div>
                    <ul className="nav right-actions">
                      <li className="me dropdown session js-session" data-global-action="t1me" id="user-dropdown">
                        <a href="/settings" className="btn js-tooltip settings dropdown-toggle js-dropdown-toggle" id="user-dropdown-toggle" data-placement="bottom" rel="noopener" role="button" aria-haspopup="true" data-original-title="Profile and settings">
                          <img className="Avatar Avatar--size32" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="Profile and settings" data-user-id={1068706177666580480} />
                        </a>
                        <div className="DashUserDropdown dropdown-menu dropdown-menu--rightAlign is-forceRight is-autoCentered">
                          <div className="dropdown-caret">
                            <span className="caret-outer" />
                            <span className="caret-inner" />
                          </div>
                          <ul tabIndex={-1} role="menu" aria-labelledby="user-dropdown-toggle" aria-hidden="true">
                            <li className="DashUserDropdown-userInfo" data-name="user-info" role="presentation">
                              <a href="/NamThan82223837" className="DashUserDropdown-userInfoLink js-nav" data-nav="view_profile" role="menuitem">
                                <b className="fullname">Nam Thang</b><span className="UserBadges" />
                                <p className="name"><span className="username u-dir u-textTruncate" dir="ltr">@<b>NamThan82223837</b></span></p>
                              </a>
                            </li>
                            <li className="dropdown-divider" role="presentation" />
                            <li className="current-user" data-name="profile" role="presentation">
                              <a href="/NamThan82223837" className="js-nav" data-nav="view_profile" role="menuitem">
                                <span className="DashUserDropdown-linkIcon Icon Icon--medium Icon--me" />Profile
                              </a>
                            </li>
                            <li data-name="lists" role="presentation">
                              <a className="js-nav" href="/NamThan82223837/lists" data-nav="all_lists" role="menuitem">
                                <span className="DashUserDropdown-linkIcon Icon Icon--medium Icon--list" />Lists
                              </a>
                            </li>
                            <li data-name="moments" role="presentation">
                              <a className="js-nav" href="/NamThan82223837/moments" data-nav="all_moments" role="menuitem">
                                <span className="DashUserDropdown-linkIcon Icon Icon--medium Icon--lightning" />Moments
                              </a>
                            </li>
                            <li className="dropdown-divider" role="presentation" />
                            <li role="presentation">
                              <a href="https://ads.twitter.com/?ref=gl-tw-tw-twitter-ads" target="_blank" data-nav="ads" rel="noopener" role="menuitem">
                                <span className="DashUserDropdown-linkIcon Icon Icon--medium Icon--promotedStroked" />Twitter Ads
                              </a>
                            </li>
                            <li role="presentation">
                              <a className="user-dropdown-analytics" href="https://analytics.twitter.com/" target="_blank" data-nav="user_dropdown_analytics" rel="noopener" role="menuitem">
                                <span className="DashUserDropdown-linkIcon Icon Icon--medium Icon--analytics" />Analytics
                              </a>
                            </li>
                            <li className="dropdown-divider" role="presentation" />
                            <li role="presentation"><a href="/settings" data-nav="settings" className="js-nav" rel="noopener" role="menuitem">Settings and privacy</a></li>
                            <li role="presentation"><a href="//support.twitter.com" data-nav="help_center" rel="noopener" role="menuitem">Help Center</a></li>
                            <li className="js-keyboard-shortcut-trigger" data-nav="shortcuts" role="presentation">
                              <button type="button" className="dropdown-link" role="menuitem">Keyboard shortcuts</button>
                            </li>
                            <li className="js-signout-button" id="signout-button" data-nav="logout" role="presentation">
                              <button type="button" className="dropdown-link" role="menuitem">Log out</button>
                              <form className="t1-form dropdown-link-form signout-form" id="signout-form" action="/logout" method="POST">
                                <input type="hidden" defaultValue="9a064e0a52a9a1ff0baedb20c4f762b62e303fe2" name="authenticity_token" className="authenticity_token" />
                                <input type="hidden" name="reliability_event" className="js-reliability-event" />
                                <input type="hidden" name="scribe_log" />
                              </form>
                            </li>
                            <li className="dropdown-divider" role="presentation" />
                            <li className="current-user nightmode-toggle" data-name="profile" role="presentation">
                              <a className="js-nav" data-nav="view_profile" role="menuitem">
                                <span className="DashUserDropdown-linkIcon Icon Icon--medium js-nightmode-icon
                Icon--crescent
                ">
                                </span><span className="js-nightmode-label">Night mode</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li role="complementary" aria-labelledby="global-new-tweet-button" className="topbar-tweet-btn">
                        <button id="global-new-tweet-button" className="js-global-new-tweet js-tooltip EdgeButton EdgeButton--primary js-dynamic-tooltip" data-placement="bottom" data-component-context="new_tweet_button" data-original-title>
                          <NavLink className="text" to="/profile">Profile</NavLink>
                        </button>
                      </li>
                      <li role="complementary" aria-labelledby="global-new-tweet-button" className="topbar-tweet-btn">
                        <button id="global-new-tweet-button" className="js-global-new-tweet js-tooltip EdgeButton EdgeButton--primary js-dynamic-tooltip"
                         data-placement="bottom" data-component-context="new_tweet_button" data-original-title  onClick={this.props.signOut}>
                          <span className="text">Sign out</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
      loginReducer: state.loginReducer,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      signOut:() =>{
        sessionStorage.removeItem('secret_key')
        axios.post('/login', { isLogin: false })
        dispatch({ type: DO_LOGIN, isLogin: false })
      }
     
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);