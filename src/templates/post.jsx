import React from "react";
import Helmet from "react-helmet";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.scss";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    // if (!post.id) {
    //   post.id = this.props.location.pathname;
    // }
    // if (!post.id) {
    //   post.category_id = config.postDefaultCategoryID;
    // }
    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="full-post">
          <div className="title">
            <h1>
              {post.title}
            </h1>
          </div>
          <div className="post-body" dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div className="post-meta">
            <div>
              <div className="post-date">Published: <span className="date">{post.date}</span></div>
              <PostTags tags={post.categories} />
            </div>
            <SocialLinks postPath={slug} postNode={postNode} />
          </div>
          <Disqus post={post} />
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date
        category
        tags
      }
    }
  }
`;
