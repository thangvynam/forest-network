import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { SAVE_TRANSACTION } from '../../Constant/actionTypes';
import Nav from '../Nav/Nav';
class NewsFeed extends Component {
    constructor(props) {
        super(props);
    }
    getTransaction = () =>
        axios.post('/getdata', { public_key: this.props.public_key })
            .then((res) => res.data)

    componentDidMount() {
        if (this.props.detailTweetReducer.tweet.length == 0) {
            this.getTransaction().then((res) => {
                this.props.saveTransaction(res)
            })
        }
    }
    render() {
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
                                        <img className="DashboardProfileCard-avatarImage js-action-profile-avatar" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png" alt />
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
                                            <span className="ProfileCardStats-statValue" data-count={1} data-is-compact="false">1</span>
                                        </a>
                                    </li><li className="ProfileCardStats-stat Arrange-sizeFit">
                                        <a className="ProfileCardStats-statLink u-textUserColor u-linkClean u-block js-nav js-tooltip" href="/NamThan82223837/followers" data-element-term="follower_stats" data-original-title="1 Follower">
                                            <span className="ProfileCardStats-statLabel u-block">Followers</span>
                                            <span className="ProfileCardStats-statValue" data-count={1} data-is-compact="false">1</span>
                                        </a>
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
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        saveTransaction: (res) => {
            console.log(res)
            dispatch({ type: SAVE_TRANSACTION, res: res })
        },
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        detailTweetReducer: state.detailTweetReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);