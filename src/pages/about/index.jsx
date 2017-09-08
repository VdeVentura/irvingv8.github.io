import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../../data/SiteConfig";
import "./About.scss";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <div className="about">
          <h1>
            About me
          </h1>
          <p>
            My name is Irving Ventura (but you already figured that out),
            a 24 year old Web Developer from Venezuela,
            currently based in Domincan Republic. I've been working at Codefuel
            for over 2 years and the past 8 months I've been doing it remotely.
          </p>
          <p>
            Started my journey developing a couple of plugins for WordPress,
            so yep... PHP. Learned a lot from WordPress and PHP (even though I
            didn't have the chance to mess around with any PHP framework)
            so there will always be a place for PHP in my hearth.
          </p>
          <p>
            The first couple of tasks I accomplished were mostly server side
            stuff (TBH client side was some sort of sorcery at that time). As I
            felt the experience was incomplete I decided to get on the boat of
            HTML and CSS. I learned most of what I know from a youtuber
            called <a href="https://www.youtube.com/user/DevTipsForDesigners">Travis Neilson</a> (yep that's where the keep on hacking stuff comes from).
          </p>
          <p>
            Fast forward some months and I started working on a project that involved
            Angular 1 development, I was enjoying the whole stuff of the web apps
            so the more I read about it the more I saw this stuff called React in a
            lot of blog posts and conferences (that I watched in YouTube). So I bought
            a course called <a href="https://www.udemy.com/react-redux/">Modern React and Redux</a> from
            Stephen Grider. And well after that I just felt in love with React.
          </p>
        </div>

        <div className="like-container">

          <div className="like">
            <h1>
              Stuff I like
            </h1>
            <div dangerouslySetInnerHTML={{ __html: '<!-- The thing I enjoy the most is bugging my Beautiful girlfriend, we have been together for almost 6 years now and oh boy! I love her -->' }} />
            <p>
              I really enjoy doing exercise so I go to the gym 3 to 4 times a week
              ussually by the night it helps me free my mind after a heavy coding session
              and stay in shape, well in the best shape you can get while still eating
              pizza and burguers (thats another stuff I really like).
            </p>
            <p>
              Another stuff I like to expend my time on is watching web dev conferences
              in any flavor: react, redux, mobx, angular, vue, css, PWA.
              For real I enjoy watching conferences and learning from the guys up there.
            </p>
            <p>
              And if there is still time left at the end of the day I like playing Dota 2,
              not really good at it, but I find it fun. I also like watching The
              International (the biggest Dota 2 torunament out there), this year
              they came out with a machine-learned bot that beat every pro player it played against.
            </p>
          </div>

          <div className="like">
            <h1>
              Stuff I'd like to do
            </h1>
            <p>
              I'd like to move to Canada or at least visit it in the near future,
              I've never been there, but from what you can see in internet, they culture
              seems to be really interesting and gentle. I can't wait to visit Tim Hortons.
            </p>
            <p>
              I'd like to attend to a couple of conferences, React Conf and
              ReactEurope are on mind but basically any web dev. Hopefully in the future
              I'll be good enough to stand up and share my knowledge with some folks
            </p>
            <p>
              The other stuff I'd like to do is go to the Key Arena (this is where The international take place)
              the next year. The whole place looks awesome, they've invested a lot in tech and to be honest
              my favorite Dota 2 player just came back from retirement and I'd like to see him play once more.
            </p>
          </div>

        </div>
      </div>
    );
  }
}

export default AboutPage;
