import React, { Component } from 'react';
import './Comment.css'
class Comment extends Component {
    render() {
        return (
            <div className="comment_block">
                <div className="new_comment">
                    <ul className="user_comment">
                        <div className="user_avatar">
                            <img src={this.props.image} />
                        </div>
                        <div className="comment_body">
                            <p>{this.props.content}</p>
                        </div>
                        <div className="comment_toolbar">
                            <div className="comment_details">
                                <ul>
                                    <li><i className="fa fa-clock-o" /> {this.props.time}</li>
                                    <li><i className="fa fa-calendar" />{this.props.date}</li>
                                    <li><i className="fa fa-pencil" /> <span className="user">{this.props.name}</span></li>
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