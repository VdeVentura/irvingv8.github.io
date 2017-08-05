import React from 'react';
import './style.scss';

class Intro extends React.Component {
  render() {
    return (
      <section className="site-intro">
        <h2 className="title">Hello There!</h2>
        <p>
          My name is Irving, I’m a Web Developer. I’m all in into JS. I like React a lot, I’m currently learning Angular 2, and I’ll be learning Vue.js soon.
        </p>

        <p>
          This is a site I’m working on in my free time, and I’ll share with you any amazing stuff I find
          on my way to get better at web development or maybe share with you anything I struggle with so you don’t have to do it.
        </p>
        <div className="slogan">
          <i className="fa fa-quote-left" aria-hidden="true"></i>
          Keep on Hacking
          <i className="fa fa-quote-right" aria-hidden="true"></i>
        </div>
      </section>
    );
  }
}

export default Intro;
