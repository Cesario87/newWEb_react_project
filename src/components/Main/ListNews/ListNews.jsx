import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
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

  handleDelete = (index) => {
    this.setState(prevState => {
      const articles = [...prevState.articles];
      articles.splice(index, 1);
      return { articles: articles };
    });
  };

  render() {
    const { articles, loading } = this.state;
    const allArticles = [...articles, ...this.props.articles];
    if (loading) {
      return <div>Loading...</div>;
    }
    console.log("from form articles: ", this.props.articles);
    return (
      <div>
        {allArticles.map((article, index) => (
          <div key={index}>
            <Card article={article} />
            <button onClick={() => this.handleDelete(index)}>🗑️</button>
          </div>
        ))}
      </div>
    );
  }
}
export default ListNews;

