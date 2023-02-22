import React, { Component } from "react";

class Card extends Component {
  render() {
    const { article } = this.props;
    const abstract = article.abstract;
    const title = article.headline && article.headline.main ? article.headline.main : article.main;
    return (
      <div>
        <h2>{title}</h2>
        <p>{abstract}</p>
        {/* <a href={article.web_url}>Read more</a> */}
      </div>
    );
  }
}

export default Card;