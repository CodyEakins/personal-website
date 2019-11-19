import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MITLogo from "../images/mit-logo.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>My Portfolio</h2>
    <p>
      Here are three cool projects that I've made (sorted by company/community):
    </p>
    <h3>Precision Print Management, Inc.</h3>
    <a href="https://precisionprintmi.com">https://precisionprintmi.com</a>
    <div
      style={{
        marginLeft: "2rem"
      }}
    >
      <h4>
        1. The Job Board - <a href="http://precisionprint.org">Link</a>
      </h4>
      <p>
        An administrative app used to help manage in-house print production jobs
        <br />
        Built using PHP, SQL, HTML, CSS, and JS
      </p>
    </div>
    <h3>Make It Train, LLC.</h3>
    <a href="https://makeittrain.com">https://makeittrain.com</a>
    <div
      style={{
        marginLeft: "2rem"
      }}
    >
      <h4>2. Logo Redesign</h4>
      <p>A logo redesign made for marketing and app development purposes</p>
      <img src={MITLogo} alt="MakeItTrain's Logo" />
      <p>Built with Adobe Illustrator</p>
    </div>
    <h3>Drawpile</h3>
    <a href="https://drawpile.net">https://drawpile.net</a>
    <div
      style={{
        marginLeft: "2rem"
      }}
    >
      <h4>
        3. Brush Dojo / `drawpile-srv` -{" "}
        <a href="https://github.com/brushdojo/drawpile-srv">Link</a>
      </h4>
      <p>
        A custom `drawpile-srv` image built for BrushDojo's Drawpile servers{" "}
        <br />
        Built using Docker, Shell, and SQL
      </p>
    </div>
    <hr />
    <p>More projects available upon request.</p>
  </Layout>
);

export default IndexPage;
