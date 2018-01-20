// @flow

import React from "react";
import Header from "./Header";
import ComposeTweet from "./ComposeTweet";

const Landing = () => (
  <div className="feed">
    <Header />
    <div className="col-md-8 offset-md-2">
      <p>{"What's happening..!!"}</p>
      <ComposeTweet />
    </div>
  </div>
);

export default Landing;
