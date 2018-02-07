// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";
import ComposeTweet from "./ComposeTweet";

class Header extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  props: { handleNewTweet: Function };
  render() {
    return (
      <div className="nav-bar">
        <ul>
          <li>
            <Link to={`/`} className="btn btn-primary">
              Twitter-Clone
            </Link>
          </li>
          <li id="compose-tweet-btn">
            <button className="btn btn-info" onClick={this.onOpenModal}>
              Tweet
            </button>
          </li>
        </ul>
        <Modal open={this.state.open} onClose={this.onCloseModal} little>
          <ComposeTweet handleNewTweet={this.props.handleNewTweet} />
        </Modal>
      </div>
    );
  }
}

export default Header;
