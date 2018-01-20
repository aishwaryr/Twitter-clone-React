// @flow

import React from "react";

const ComposeTweet = () => (
  <div className="compose-tweet">
    <div className="row">
      <p>{"What's happening..!!"}</p>
      <textarea type="text" />
    </div>
    <div className="row">
      <button className="btn btn-success btn-block">Tweet</button>
    </div>
  </div>
);

export default ComposeTweet;
