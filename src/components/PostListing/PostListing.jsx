import React from "react";
import './style.scss';

import SinglePost from '../SinglePost';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      console.log(postEdge);
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  renderPosts(postList) {
    console.log(postList);
    return postList.map(post =>
        <SinglePost post={post} key={post.title}/>
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
