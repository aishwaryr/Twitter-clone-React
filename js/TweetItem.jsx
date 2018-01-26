// @flow

import React from "react";
import Header from "./Header";

const TweetItem = (props: { tweet: Tweet }) => {
  const {
    // Below code is ES6 destructuring not flow types or objects
    first_name: firstName,
    last_name: lastName,
    profile_picture: profilePicture,
    tweet,
    likes,
    retweets
  } = props.tweet;
  // console.log(props);
  // TODO :: take the below HTML and make a seperate Comp to be used in tweetlist also
  return (
    <div>
      <Header />
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
                <strong>{"?"}</strong>:777
              </p>&nbsp;&nbsp;&nbsp;&nbsp;
              <p className="show-inline">
                <strong>{"><"}</strong>:{retweets}
              </p>&nbsp;&nbsp;&nbsp;&nbsp;
              <p className="show-inline">
                <strong>{"<3"}</strong>:{likes}
              </p>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetItem;
