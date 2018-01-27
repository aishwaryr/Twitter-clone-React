// @flow

import React, { Component } from "react";

class ComposeTweet extends Component {
  state = {
    newTweet: ""
  };
  handleChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ newTweet: event.target.value });
  };
  handleClick = () => {
    if (this.state.newTweet.length > 0) {
      this.props.handleNewTweet(this.state.newTweet);
      this.setState({ newTweet: "" });
    }
  };
  props: { handleNewTweet: Function };
  render() {
    return (
      <div className="compose-tweet">
        <div className="row">
          <p>{"What's happening..!!"}</p>
          <textarea
            type="text"
            value={this.state.newTweet}
            onChange={this.handleChange}
          />
        </div>
        <div className="row">
          <button
            className="btn btn-success btn-block"
            onClick={this.handleClick}
          >
            Tweet
          </button>
        </div>
      </div>
    );
  }
}

export default ComposeTweet;
