import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`
    }}
  >
    <h1>{siteTitle}</h1>
    <p>Full-Stack App Developer, Hobbyist Artist</p>
    <p>
      <b>Email:</b> caeakins@gmail.com <br />
      <b>Phone Number:</b> (630) 795-9070
    </p>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ""
};

export default Header;
