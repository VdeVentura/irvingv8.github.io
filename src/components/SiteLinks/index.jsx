import React from 'react';
import './style.scss';

class SiteLinks extends React.Component {
  render() {
    return (
      <div className="blog-links">
        <ul>
            <li>
              <a href="https://www.instagram.com/irvingv8/">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/irvingv8">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/irvingv8">
                <i className="fa fa-twitter" />
              </a>
            </li>
        </ul>
        <ul>
            <li>
              <a href="https://github.com/irvingv8">
                <i className="fa fa-github" />
              </a>
            </li>
            <li>
              <a href="https://codepen.io/irvingv8/">
                <i className="fa fa-codepen" />
              </a>
            </li>
            <li>
              <a href="mailto:irvingv8@gmail.com">
                <i className="fa fa-envelope-o" />
              </a>
            </li>
        </ul>

      </div>
    );
  }
}

export default SiteLinks;
