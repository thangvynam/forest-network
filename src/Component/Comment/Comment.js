import React, { Component } from 'react';
import './Comment.css'
class Comment extends Component {
    render() {
        return (
            <div className="comment_block">
                <div className="new_comment">
                    <ul className="user_comment">
                        <div className="user_avatar">
                            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/73.jpg" />
                        </div>
                        <div className="comment_body">
                            <p>Gastropub cardigan jean shorts, kogi Godard PBR&amp;B lo-fi locavore. Organic chillwave vinyl Neutra. Bushwick Helvetica cred freegan, crucifix Godard craft beer deep v mixtape cornhole Truffaut master cleanse pour-over Odd Future beard. Portland polaroid iPhone.</p>
                        </div>
                        <div className="comment_toolbar">
                            <div className="comment_details">
                                <ul>
                                    <li><i className="fa fa-clock-o" /> 13:94</li>
                                    <li><i className="fa fa-calendar" /> 04/01/2015</li>
                                    <li><i className="fa fa-pencil" /> <span className="user">John Smith</span></li>
                                </ul>
                            </div>{/* inc. share/reply and love */}<div className="comment_tools">
                                <ul>
                                    <li><i className="fa fa-share-alt" /></li>
                                    <li><i className="fa fa-reply" /></li>
                                    <li><i className="fa fa-heart love" /></li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Comment;