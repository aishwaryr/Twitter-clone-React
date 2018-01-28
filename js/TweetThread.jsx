// @flow

import React from "react";
import Header from "./Header";
import TweetCard from "./TweetCard";

const TweetThread = (props: { tweet: Tweet }) => (
  <div>
    <Header />
    <TweetCard {...props.tweet} />
    <div className="replies">
      <p>Replies Go Here</p>
    </div>
  </div>
);

export default TweetThread;
