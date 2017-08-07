import React from 'react';
import Link from "gatsby-link";
import './style.scss';

class SinglePost extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <article className="post-preview">
        <Link to={post.path}>
          <div className="cover" style={{backgroundImage: `url(${post.image})`}}></div>
          <div className="details">
            <h1 className="title">
              {post.title}
            </h1>
            <p className="excerpt">
              {post.excerpt}
            </p>
            <div>
              
            </div>
            <div className="date">
              Published on <span>{post.date}</span>
            </div>
          </div>
        </Link>
      </article>
    );
  }
}

export default SinglePost;
