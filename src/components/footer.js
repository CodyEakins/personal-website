import React from "react";

const Footer = () => (
  <footer
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`
    }}
  >
    Copyright &copy; {new Date().getFullYear()}, Cody Eakins
  </footer>
);

export default Footer;
