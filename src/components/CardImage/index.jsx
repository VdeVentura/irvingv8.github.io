import React from 'react';
import Link from "gatsby-link";
import './style.scss';

class CardImage extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <article className="card">
        <Link to={this.props.link ? this.props.link : '#'}>
          <div className="cover"
            style={{
              backgroundImage: `url(${this.props.cover})`,
              backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : 'transparent',
              backgroundSize: this.props.backgroundSize ? this.props.backgroundSize : 'cover'
            }}
          ></div>
          <div className="details">
            <h3 className="header">
              {this.props.header}
            </h3>
            <p className="body">
              {this.props.body}
            </p>
            <div className="footer">
              {this.props.footer && this.props.footer.map((textOrHTML, index) => <span key={index}>{textOrHTML}</span>)}
            </div>
          </div>
        </Link>
      </article>
    );
  }
}

export default CardImage;
