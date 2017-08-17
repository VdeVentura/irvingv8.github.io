import React from "react";
import './style.scss';

import CardImage from '../CardImage';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        image: postEdge.node.frontmatter.image ? postEdge.node.frontmatter.image.childImageSharp.original.src : `https://unsplash.it/300?image=${Math.floor((Math.random() * 1000) + 1)}`,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  renderPosts(postList) {
    return postList.map(post =>
        <CardImage
          link={post.path}
          cover={post.image}
          header={post.title}
          body={post.excerpt}
          footer={["Published on ",<span style={{color:'#ff6d00'}}>{post.date}</span>]}
          key={post.title}
        />
    );
  }

  render() {
    const postList = this.getPostList();
    return (
      <section className="post-list">
        <h2 className="title">Latest Posts</h2>
        {this.renderPosts(postList)}
      </section>
    );
  }
}

export default PostListing;
