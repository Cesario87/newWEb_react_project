import React, { Component } from "react";
import Home from './Home';
import Form from './Form';
import ListNews from './ListNews';
import { Routes, Route } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  addArticle = (newArticle) => {
    console.log("Received new article:", newArticle);
    const { main, abstract, web_url } = newArticle;
    const formattedArticle = { main, abstract, web_url };
    this.setState((prevState) => ({
      articles: [...prevState.articles, formattedArticle]
    }), () => {
      console.log("New article added!");
      console.log("All articles:", this.state.articles);
    });
  }

  render() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form addArticle={this.addArticle} />} />
          <Route path="/list" element={<ListNews articles={this.state.articles} />} />
        </Routes>
      </main>
    );
  }
}

export default Main;
