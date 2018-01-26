// @flow

import React from "react";

const TweetItem = (props: Tweet) => (
  <div className="tweet">
    <p>{props.tweet}</p>
  </div>
);

export default TweetItem;
