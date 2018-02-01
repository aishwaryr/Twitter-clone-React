// @flow

import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import config from "../secret/config.json";

class RandomGif extends Component {
  state = {
    gifUrl: "",
    keyword: "tom cruise",
    giphyApiKey: config.giphy_api_key,
    rating: "G"
  };
  componentDidMount() {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/random?api_key=${this.state.giphyApiKey}&tag=${this.state.keyword}&rating=${this.state.rating}`
      )
      .then((response: { data: { data: { image_url: string } } }) => {
        // console.log(response);
        this.setState({ gifUrl: response.data.data.image_url });
      });
  }
  render() {
    let imgUrlComp;
    if (this.state.gifUrl) {
      // ratingComponent is defined like this instead of <RatingComponent>
      // because then we will have to make a function here and that would be
      // slow because a function will be created on every render
      imgUrlComp = <img src={this.state.gifUrl} alt="random gif here" />;
    } else {
      imgUrlComp = <p>Loading</p>;
    }
    return (
      <div>
        {imgUrlComp}
      </div>
    );
  }
}

export default RandomGif;
