import React, { Component } from "react";
import Cards from "./Card";
import axios from "axios";

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=videogames&api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        const apiArticles = response.data.response.docs.slice(0, 5);
        const articles = [...this.state.articles];
        apiArticles.forEach(apiArticle => {
          if (!articles.find(article => article.web_url === apiArticle.web_url)) {
            articles.push(apiArticle);
          }
        });
        this.setState({ articles });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.map((article, index) => (
          <div key={index}>
            <Cards
              article={article}
              onDelete={() => {
                const newArticles = [...articles];
                newArticles.splice(index, 1);
                this.setState({ articles: newArticles });
              }}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ListNews;
