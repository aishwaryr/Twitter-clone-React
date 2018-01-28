// @flow

import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="nav-bar">
    <Link to={`/`} className="btn btn-primary pull-right">Twitter-Clone</Link>
    {/* <a className="btn btn-primary pull-right">Tweet</a> */}
  </div>
);

export default Header;
