import React, { Component } from "react";
import Home from './Home';
import Forms from './Form';
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
    console.log("All articles:", newArticle);
    const { main, abstract, web_url } = newArticle;
    const formattedArticle = { main, abstract, web_url };
    this.setState((prevState) => ({
      articles: [...prevState.articles, formattedArticle]
    }), () => {
      console.log("Added articles:", this.state.articles);
    });
  }

  render() {
    return (
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Forms addArticle={this.addArticle} />} />
          <Route path="/list" element={<ListNews articles={this.state.articles} />} />
        </Routes>
      </main>
    );
  }
}

export default Main;
