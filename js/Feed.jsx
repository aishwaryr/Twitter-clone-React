// @flow

import React from "react";
import Header from "./Header";
import ComposeTweet from "./ComposeTweet";
import TweetList from "./TweetList";

const Feed = () => (
  <div className="feed">
    <Header />
    <div className="col-md-6 offset-md-3">
      <ComposeTweet />
      <TweetList />
    </div>
  </div>
);

export default Feed;
