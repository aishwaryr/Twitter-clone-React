// @flow

import React from "react";
import Header from "./Header";
import TweetCard from "./TweetCard";
// import RandomGif from "./RandomGif";

const TweetThread = (props: { tweet: Tweet, handleNewTweet: Function }) => (
  <div>
    <Header handleNewTweet={props.handleNewTweet} />
    <TweetCard {...props.tweet} />
    {/* <RandomGif /> */}
    <div className="replies">
      <p>Replies Go Here</p>
    </div>
  </div>
);

export default TweetThread;
