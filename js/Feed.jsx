// @flow

import React from "react";
import Header from "./Header";
import ComposeTweet from "./ComposeTweet";
import TweetList from "./TweetList";

const Feed = (props: { tweets: Array<Tweet> }) => (
  <div className="feed">
    <Header />
    <div className="col-md-6 offset-md-3">
      <ComposeTweet />
      <div>
        {props.tweets.map(tweet => <TweetList key={tweet.id} {...tweet} />)}
      </div>
    </div>
  </div>
);

export default Feed;
