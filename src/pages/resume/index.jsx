import React from 'react';
import CardImage from '../../components/CardImage';

import AngularIcon from './icons/angular';
import CplusPlusIcon from './icons/cplusplus';
import CSSIcon from './icons/css';
import GitIcon from './icons/git';
import HTMLIcon from './icons/html';
import JavaIcon from './icons/java';
import JavascriptIcon from './icons/js';
import PHPIcon from './icons/php';
import ReactIcon from './icons/react';
import ReduxIcon from './icons/redux';
import VuejsIcon from './icons/vue';
import WordpressIcon from './icons/wordpress';
import NodejsIcon from './icons/node';

import codefuel from './images/codefuel.png';
import afth from './images/afth.png';
import omnis from './images/omnisfoundation.png';
import moguls from './images/youngmoguls.png';
import middle from './images/middleman.png';

import './style.scss';

class SiteIndex extends React.Component {
  render() {
    return (
      <div className="resume">
        <div className="timeline">
          <div className="category">
            <h2>Experience</h2>
            <div className="point">
              <div className="year">
                2015-Now</div>
              <i className="fa fa-code" aria-hidden="true"></i>
              <div className="details">
                <h3 className="name">Web Developer: Codefuel</h3>
                <div className="description">
                  <p>
                    Landed my first job in 2015 while still attending to College, I was able to meet some great people who got me started in the web dev world.
                  </p>
                  <p>
                    I learned PHP and Wordpress, and developed a couple of plugins for it. Afterwards, I developed a Magento extension to make use of MercadoLibre's API
                    and manage all MercadoLibre's activity (articles, orders and questions) within Magento (this was part of my undergraduate thesis).
                  </p>
                  <p>
                    I got involved in a project called <i>Somosport</i>, where I developed a React app and assisted in a couple of Angularjs apps,
                    the development of a Node API and the design of the DB (Postgres).
                  </p>
                  <p>
                    I was able to enhance the team's workflow by implementing Browsersync into our projects, and solved an issue with our API hitting R14 in Heroku
                    due to Node's Lazy GC.
                  </p>
                  <p>
                    Also I've met with our users to stablish their requirements and keep track of the implementantion of the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="category">
            <h2>Education</h2>
            <div className="point">
              <div className="year">
                2010-2016</div>
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              <div className="details">
                <h3 className="name">College: Universidad Metropolitana</h3>
                <div className="description">
                  <p>
                    I obtained a Systems Engineering Degree in the <i>Universidad Metropolitana</i> where I was able to pick up the concepts of Algorithms, OOP, DB, DBA, MIS and Software Engineering among others.
                  </p>
                  <p>
                    I was part of the Systems Engineering's Students' Union two consecutive years. The first year as a collaborator and the second year as Chief Coordinator.
                  </p>
                </div>
              </div>
            </div>
            <div className="point">
              <div className="year">
                2005-2010</div>
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              <div className="details">
                <h3 className="name">High School: Colegio La Salle La Colina</h3>
                <div className="description">
                  <p>
                    I obtained my High School Diploma in <i>La Salle La Colina</i>.
                  </p>
                  <p>
                    While being here (and sometime before it) I was part of the school soccer team. This activity allowed me to understand the value of team work and discipline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2>Skills</h2>
        <div className="skills">

          <div className="skill-container">
            <h3>I'm good at</h3>
            <ul className="skill-list">
              <li><HTMLIcon/>HTML</li>
              <li><CSSIcon/>CSS</li>
              <li><JavascriptIcon/>Javascript</li>
              <li><ReactIcon/>React</li>
              <li><ReduxIcon/>Redux</li>
              <li><PHPIcon/>PHP</li>
              <li><GitIcon/>Git</li>
            </ul>
          </div>

          <div className="skill-container">
            <h3>I can do</h3>
            <ul className="skill-list">
              <li><AngularIcon/>AngularJS</li>
              <li><NodejsIcon/>Node.js</li>
              <li><CplusPlusIcon/>C++</li>
              <li><JavaIcon/>Java</li>
              <li><WordpressIcon/>Wordpress</li>
            </ul>
          </div>

          <div className="skill-container">
            <h3>I'm currently learning</h3>
            <ul className="skill-list">
              <li><AngularIcon/>Angular 4</li>
            </ul>
          </div>

          <div className="skill-container">
            <h3>I want to learn</h3>
            <ul className="skill-list">
              <li><VuejsIcon/>Vue.js</li>
              <li><ReactIcon/>React Native</li>
            </ul>
          </div>

        </div>

        <h2>Stuff I've done <small>as freelancer</small></h2>
        <div style={{display:'flex', flexWrap: 'wrap'}}>
          <CardImage
            data = {true}
            cover = {codefuel}
            backgroundColor = '#fff'
            backgroundSize = '100%'
            external="true"
            link="http://codefuel.me/"
            header = {'Codefuel'}
            body = {'Designed/Developed a static site built with gatsby for codefyel'}
            footer = {["React, HTML, CSS, JS"]}
          />
          <CardImage
            data = {true}
            cover = {afth}
            backgroundColor = '#000000'
            backgroundSize = '80%'
            external="true"
            link="http://aimfortheheart.me/"
            header = {'AFTH'}
            body = {'Helped Marcus Moore redesign his lading page, modified his custom theme, replaced 960 grid with bootstrap.'}
            footer = {["WP, HTML, CSS, JS"]}
          />
          <CardImage
            data = {true}
            cover = {moguls}
            backgroundColor = '#000000'
            backgroundSize = '80%'
            external="true"
            link="http://youngmoguls.club/"
            header = {'Young Moguls'}
            body = {'Modified the wordpress checkout process to add a custom form based on how many childs will be registered in the camp, assisted the client to setup some plugins.'}
            footer = {["WP, WooCommerce, HTML, CSS, JS"]}
          />
          <CardImage
            data = {true}
            cover = {omnis}
            backgroundSize = '60%'
            header = {'Omnis Foundation'}
            external="true"
            link="https://omnisfoundation.org/"
            body = {'Worked for some months with Oksana Kariv to adjust several sections of the site and develop a couple of new pages for the non-profit organization dedicated to restoring Ukraine.'}
            footer = {["WP, HTML, CSS, JS"]}
          />
          <CardImage
            data = {true}
            cover = {middle}
            backgroundColor = '#fff'
            backgroundSize = '80%'
            external="true"
            link="http://www.middlemanmovie.com/"
            header = {'Middle Man'}
            body = {'Integrated the site with gathr to set up the new screening request and notify buttons'}
            footer = {["Squarespace, GATHR"]}
          />
        </div>

      </div>
    );
  }
}

export default SiteIndex;
