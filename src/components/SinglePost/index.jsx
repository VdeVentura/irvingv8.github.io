import React from 'react';
import Link from "gatsby-link";
import './style.scss';

class SinglePost extends React.Component {
  render() {
    const { post } = this.props;
    // console.log(post);
    return (
      <article className="post-preview">
        <Link to={post.path}>
          <div className="cover" style={{backgroundImage: `url(${post.cover})`}}></div>
          <div className="details">
            <h1 className="title">
              {post.title}
            </h1>
            <p className="excerpt">
              {post.excerpt}
            </p>
          </div>
        </Link>
      </article>
    );
  }
}

export default SinglePost;
