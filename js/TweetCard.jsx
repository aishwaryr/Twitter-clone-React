// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";

class TweetCard extends Component {
  state = {
    likes: this.props.likes,
    likeStatus: false
  };
  addLike = () => {
    this.setState({ likeStatus: !this.state.likeStatus });
    if (this.state.likeStatus) {
      this.setState({ likes: this.state.likes - 1 });
    } else {
      // this.setState({ likeStatus: true });
      this.setState({ likes: this.state.likes + 1 });
    }
  };
  props: Tweet;
  render() {
    let likeBtnClassName = "";
    if (this.state.likeStatus) {
      likeBtnClassName = "pink-like-icon";
    }
    const {
      // Below code is ES6 destructuring not flow types or objects
      first_name: firstName,
      last_name: lastName,
      profile_picture: profilePicture,
      tweet,
      retweets,
      replies
    } = this.props;
    return (
      <Link to={`/tweet/${this.props.id}`} className="tweet-list-link">
        <div className="tweet-list">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2">
                <img
                  className="tweeter-pic"
                  src={profilePicture}
                  alt={`${firstName} ${lastName}'s profile`}
                />
              </div>
              <div className="col-sm-10">
                <p className="tweeter-name">
                  <strong>{`${firstName} ${lastName}`}</strong>
                </p>
                <p>{tweet}</p>
                <p className="show-inline">
                  <i className="fas fa-retweet" /> {retweets}
                </p>&nbsp;&nbsp;&nbsp;&nbsp;
                <p className="show-inline">
                  <i className="fas fa-reply" /> {replies}
                </p>&nbsp;&nbsp;&nbsp;&nbsp;
                <p className="show-inline">
                  <button className={likeBtnClassName} onClick={this.addLike}>
                    <i className="fa fa-heart" />
                  </button>
                  {this.state.likes}
                </p>&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default TweetCard;
