import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      newArticles: [],
      loading: true
    };
  }

  componentDidMount() {
    const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=videogames&api-key=${process.env.REACT_APP_API_KEY}`;

    axios.get(apiUrl)
      .then(response => {
        const articles = response.data.response.docs.slice(0, 5); // get the first 5 articles
        this.setState({ articles, loading: false });
      })
      .catch(error => console.error(error));
  }

  handleDelete = index => {
    const newArticles = [...this.state.newArticles];
    newArticles.splice(index, 1);
    this.setState({ newArticles });
  };

  handleAddArticle = (newArticle) => {
    const newArticles = [...this.state.newArticles, newArticle];
    this.setState((prevState) => ({
      newArticles: [...prevState.newArticles, newArticle],
      articles: [...prevState.articles, newArticle] // add the new article to the articles state
    }));
    console.log("New articles: ", newArticles);
  };

  render() {
    const { articles, newArticles, loading } = this.state;
    const allArticles = [...articles, ...newArticles, ...this.props.articles];
    console.log("All articles: ", allArticles);
    // Wait for both API and new articles promises to resolve before rendering
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        {allArticles.map((article, index) => (
          <div key={index}>
            <Card article={article} />
            {index >= articles.length && <button onClick={() => this.handleDelete(index - articles.length)}>Remove</button>}
          </div>
        ))}
      </div>
    );
  }
}

export default ListNews;

