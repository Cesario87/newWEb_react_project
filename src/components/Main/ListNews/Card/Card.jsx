import React, { Component } from "react";

class Card extends Component {
  render() {
    const { article } = this.props;
    const abstract = article.abstract && article.abstract.substr(0, 100) + "...";
    const title = article.headline && article.headline.main ? article.headline.main : article.main;
    const web_url = article.web_url;
    return (
      <div>
        <h2>{title}</h2>
        <p>{abstract}</p>
        <a href={web_url}>Keep reading...</a>
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

export default Card;
