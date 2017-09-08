import React, { Component } from 'react';
import CardImage from '../../components/CardImage';
import Filter from './components/Filter';
import _filter from 'lodash/filter';
import _union from 'lodash/union';
import _includes from 'lodash/includes';
import _difference from 'lodash/difference';
import './style.scss'

class Blog extends Component {

  constructor(props) {

    super(props);
    this.state = {
      initialPostList: [],
      postList: [],
      activeCategory: '',
      categoryList: [],
      orderBy: ['Title','Date'],
      sort: ['Asc', 'Desc'],
      search: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleOrder = this.handleOrder.bind(this);

  }

  componentDidMount() {

    const postEdges = this.props.data.allMarkdownRemark.edges;
    let categoryList = [];
    const postList = [];

    postEdges.forEach(postEdge => {
      categoryList = _union(categoryList, postEdge.node.frontmatter.category);

      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        category: postEdge.node.frontmatter.category,
        cover: postEdge.node.frontmatter.cover,
        image: postEdge.node.frontmatter.image ? postEdge.node.frontmatter.image.childImageSharp.original.src : `https://unsplash.it/300?image=${Math.floor((Math.random() * 1000) + 1)}`,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });

    this.setState({categoryList, postList, initialPostList: postList})

  }

  handleSearch(query) {
    if (!query) {
      const postList = this.state.initialPostList
      return this.setState({postList})
    }

    const postList = _filter(this.state.initialPostList, (post) => {

      const deepCheck = (targetArray, queryArray, margin) => {
        return _filter(targetArray, (target) => {
          return _includes(queryArray, target.toLowerCase()) || _includes( target.toLowerCase(), queryArray);
        }).length >= (queryArray.length)/margin;
      }

      const nameTest = deepCheck(post.title.split(' '), query.toLowerCase().split(' '), 2);
      const tagTest = deepCheck(post.tags, query.toLowerCase().split(' '), 2);
      const categoryTest = _includes(post.category, query.toLowerCase());

      return nameTest || categoryTest || tagTest;

    })

    return this.setState({postList})
  }

  handleCategory(option) {
    if (!option || option == 'All') {
      const postList = this.state.initialPostList;
      return this.setState({postList});
    }
    this.setState({activeCategory : option}, ()=>{
      const postList = _filter(this.state.initialPostList, (post)=> {
        return _includes(post.category, option)
      })
      this.setState({postList})
    })
  }

  handleOrder(option) {
  }

  renderPosts() {
    return this.state.postList.map(post =>
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
    return (
      <div>
        <Filter
          handleSearch={this.handleSearch}
          handleCategory={this.handleCategory}
          handleOrder={this.handleOrder}
          categoryList={this.state.categoryList}
        />
        <div className="blog">
          <h1>
            Posts
          </h1>
          <div style={{display: "flex", flexWrap: "wrap"}}>
            {this.renderPosts()}
          </div>
        </div>
      </div>
    );
  }

}

export default Blog;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            category
            tags
            date
            image {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
