import React from 'react';
import { AboutTop } from './AboutTop';

export const AboutView = () => {
  return (
    <div className="view-container about-container container">
    <div className="project-view">
      <div className="question row">
        <div className="question-title twelve columns">
          Product and User-Driven
        </div>
        <div className="question-response twelve columns">
        I'm a Full Stack Software Engineer passionate about building and shipping beautiful, thoughtful, and performant products.

        I'm oriented by a holistic understanding of the full stack, utilizing tools like React, Node, and MongoDB to create products
        guided by my deep experience in understanding user needs.
        </div>
      </div>

      <hr />
      <AboutTop />
      <hr />

      <div className="question row">
        <div className="question-title twelve columns">
          What I'm Looking For
        </div>
        <div className="question-response twelve columns">
        I spend a lot of time considering 'developer experience' - I'm encouraged
        by the momentum I see in the community, especially wth an increasingly positive
        response towards the open source community. I'm particularly passionate
        about the fact that budding technologies many of us use in production can
        be the resulting ideas.
        </div>
      </div>

      <hr />
      <div className="question row">
        <div className="question-title twelve columns">
          Built with
        </div>
        <div className="question-response twelve columns">
          I decided to leverage some of my favorite technologies in building out this portfolio.
          Given the nature of React and Redux, which allows easy serialization of app state, I was
          able to incorporate server-side-rendering (also known as universal or isomoprhic).
        </div>
      </div>
      </div>
    </div>
  );
};
