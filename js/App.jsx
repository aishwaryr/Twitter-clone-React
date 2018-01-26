// @flow

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import type { Match } from "react-router-dom";
import Feed from "./Feed";
import Data from "./Data";
import FourOhFour from "./FourOhFour";
import preload from "../data.json";
import TweetItem from "./TweetItem";

console.log(preload.tweets);
class App extends Component {
  state = {
    tweets: preload.tweets
  };
  handleNewTweet = (newTweet: Tweet) => {
    const newTweetArray = preload.tweets.unshift(newTweet);
    this.setState({ tweets: newTweetArray });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              component={props => (
                <Feed tweets={this.state.tweets} {...props} />
              )}
            />
            <Route
              path="/tweet/:id"
              component={(props: { match: Match }) => {
                const selectedTweet = this.state.tweets.find(
                  tweet => props.match.params.id === tweet.id.toString()
                );
                return <TweetItem tweet={selectedTweet} {...props} />;
              }}
            />
            <Route path="/data" component={Data} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
