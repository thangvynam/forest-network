import React, { Component } from 'react';

class CoverImage extends Component {
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
                                        <div className="ProfileAvatarEditing">
                                            <div className="ProfileAvatarEditing-overlay" />
                                            <div className="ProfileAvatarEditing-buttonContainer">
                                                <button className="ProfileAvatarEditing-button u-boxShadowInsetUserColorHover" type="button" tabIndex={2}>
                                                    <div className="ProfileAvatarEditing-addAvatarHelp">
                                                        <span className="Icon Icon--cameraPlus" />
                                                        <p>Add a profile photo</p>
                                                    </div>
                                                    <div className="ProfileAvatarEditing-changeAvatarHelp">
                                                        <span className="Icon Icon--camera" />
                                                        <p>Change your profile photo</p>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
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
                                                    <a className="ProfileCardMini-avatar profile-picture js-tooltip" href="https://abs.twimg.com/sticky/default_profile_images/default_profile_200x200.png" title="Nam Thang" data-resolved-url-large="https://abs.twimg.com/sticky/default_profile_images/default_profile_200x200.png" data-url="https://abs.twimg.com/sticky/default_profile_images/default_profile_200x200.png" target="_blank" rel="noopener" tabIndex={-1}>
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
                                                            <a className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav" data-nav="tweets" tabIndex={0} data-original-title="1 Tweet">
                                                                <span className="ProfileNav-label" aria-hidden="true">Tweets</span>
                                                                <span className="u-hiddenVisually">Tweets, current page.</span>
                                                                <span className="ProfileNav-value" data-count={1} data-is-compact="false">1
                                </span>
                                                            </a>
                                                        </li><li className="ProfileNav-item ProfileNav-item--lists" data-more-item=".ProfileNav-dropdownItem--lists">
                                                            <a className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor" data-nav="all_lists" href="/NamThan82223837/lists" data-original-title="0 Lists">
                                                                <span className="ProfileNav-label" aria-hidden="true">Lists</span>
                                                                <span className="u-hiddenVisually">Lists</span>
                                                                <span className="ProfileNav-value" data-is-compact="false">0</span>
                                                            </a></li><li className="ProfileNav-item ProfileNav-item--moments" data-more-item=".ProfileNav-dropdownItem--userMoments">
                                                            <a className="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip  js-nav u-textUserColor" title="0 Moments" data-nav="user_moments" href="/NamThan82223837/moments">
                                                                <span className="ProfileNav-label" aria-hidden="true">Moments</span>
                                                                <span className="u-hiddenVisually">Moments</span>
                                                                <span className="ProfileNav-value" data-is-compact="false">0</span>
                                                            </a></li><li className="ProfileNav-item ProfileNav-item--more dropdown is-hidden" style={{}}>        <a className="ProfileNav-stat ProfileNav-stat--link ProfileNav-stat--moreLink js-dropdown-toggle" role="button" href="#more">
                                                                <span className="ProfileNav-label">&nbsp;</span>
                                                                <span className="ProfileNav-value">More <span className="ProfileNav-dropdownCaret Icon Icon--medium Icon--caretDown" /></span>
                                                            </a>
                                                            <div className="dropdown-menu">
                                                                <div className="dropdown-caret">
                                                                    <span className="caret-outer" />
                                                                    <span className="caret-inner" />
                                                                </div>
                                                                <ul><li>
                                                                    <a href="/NamThan82223837/lists" className="ProfileNav-dropdownItem ProfileNav-dropdownItem--lists is-hidden u-bgUserColorHover u-bgUserColorFocus u-linkClean js-nav" style={{}}>Lists</a></li><li>
                                                                        <a href="/NamThan82223837/moments" className="ProfileNav-dropdownItem ProfileNav-dropdownItem--userMoments is-hidden u-bgUserColorHover u-bgUserColorFocus u-linkClean js-nav" style={{}}>Moments</a></li></ul>
                                                            </div>
                                                        </li><li className="ProfileNav-item ProfileNav-item--userActions u-floatRight u-textRight with-rightCaret ">
                                                            <div className="UserActions   u-textLeft">
                                                                <button type="button" className="UserActions-editButton edit-button EdgeButton EdgeButton--tertiary" data-scribe-element="profile_edit_button">
                                                                    <span className="button-text">Edit profile</span>
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
            </div>
        );
    }
}
export default CoverImage;