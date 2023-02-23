import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles
    };
  }

  componentDidMount() {
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=videogames&api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        const apiArticles = response.data.response.docs.slice(0, 5);
        const articles = [...this.state.articles, ...apiArticles];
        this.setState({ articles });
      })
      .catch(error => {
        console.log(error);
      });
  }

  //COMPONENTDIDUPDATE!!!!!!!

  //VER EJEMPLO DE CLASE, BORRAR EVENTO!!!!!!!!!!!!!!!!!!!!
  // handleDelete = (index) => {
  //   const allArticles = this.allArticles();
  //   allArticles.splice(index, 1); // remove the article at the specified index
  //   this.setState({ articles: allArticles }, () => {
  //     console.log("Deleted article at index:", index);
  //   });
  // }

  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.map((article, index) => (
        <div key={index}>
          <Card article={article} />
        </div>
        ))}
      </div>
    );
  }
}

export default ListNews;
