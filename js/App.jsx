// @flow

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import type { Match } from "react-router-dom";
import Feed from "./Feed";
import Data from "./Data";
import RandomGif from "./RandomGif";
import FourOhFour from "./FourOhFour";
import preload from "../data.json";
import TweetThread from "./TweetThread";
import { makeTweetObject } from "./helpers";

// console.log(preload.tweets);

class App extends Component {
  state = {
    tweets: preload.tweets
  };
  handleNewTweet = (newTweet: string) => {
    // const newTweetArray = preload.tweets.unshift(newTweet);
    const newTweetArray = [makeTweetObject(newTweet)].concat(this.state.tweets);
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
                <Feed
                  tweets={this.state.tweets}
                  handleNewTweet={this.handleNewTweet}
                  {...props}
                />
              )}
            />
            <Route
              path="/tweet/:id"
              // eslint-disable-next-line react/no-unused-prop-types
              component={(props: { match: Match }) => {
                const selectedTweet = this.state.tweets.find(
                  tweet => props.match.params.id === tweet.id
                );
                return <TweetThread tweet={selectedTweet} {...props} />;
              }}
            />
            <Route path="/data" component={Data} />
            <Route path="/gif" component={RandomGif} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
