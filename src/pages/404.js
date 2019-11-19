import React from "react";
import { Link } from "gatsby";

import SEO from "../components/seo";

const NotFoundPage = () => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`
    }}
  >
    <SEO title="404: Not found" />
    <h1>404 NOT FOUND</h1>
    <p>The page that you requested does not exist!</p>
    <Link to="/">Return to home</Link>
  </div>
);

export default NotFoundPage;
