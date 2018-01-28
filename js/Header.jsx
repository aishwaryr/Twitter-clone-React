// @flow

import React from "react";
import { Link } from "react-router-dom";

const Header = () => // <div className="nav-bar">
// <ul className=""></ul>
//   <Link to={`/`} className="btn btn-primary pull-right">Twitter-Clone</Link>
//   {/* <a className="btn btn-primary pull-right">Tweet</a> */}
// </div>
(
  <div className="nav-bar">
    <ul>
      <li>
        <Link to={`/`} className="btn btn-primary">
          Twitter-Clone
        </Link>
      </li>
      <li id="compose-tweet-btn">
        <button className="btn btn-info">Tweet</button>
      </li>
    </ul>
  </div>
);

export default Header;
