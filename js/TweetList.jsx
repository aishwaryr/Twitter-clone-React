// @flow

import React from "react";
// import { Link } from "react-router-dom";
// import Tweet from "./Tweet";

const TweetList = (props: Tweet) => (
  <div className="tweet-list">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2">
          <img
            className="tweeter-pic"
            src={props.profile_picture}
            alt={`${props.first_name} ${props.last_name}'s profile`}
          />
        </div>
        <div className="col-sm-10">
          <p className="tweeter-name">
            <strong>{`${props.first_name} ${props.last_name}`}</strong>
          </p>
          <p>{props.tweet}</p>
          <p className="show-inline">
            <strong>{"?"}</strong>:777
          </p>&nbsp;&nbsp;&nbsp;&nbsp;
          <p className="show-inline">
            <strong>{"><"}</strong>:{props.retweets}
          </p>&nbsp;&nbsp;&nbsp;&nbsp;
          <p className="show-inline">
            <strong>{"<3"}</strong>:{props.likes}
          </p>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  </div>
);

// TODO: Add link on tweet-list

export default TweetList;
