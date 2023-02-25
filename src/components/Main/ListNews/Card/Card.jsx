import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Cards extends Component {
  render() {
    const { article } = this.props;
    const abstract = article.abstract && article.abstract.substr(0, 100) + "...";
    const title = article.headline && article.headline.main ? article.headline.main : article.main;
    const web_url = article.web_url;
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{abstract}</Card.Text>
            <Card.Link href={web_url}>Keep reading...</Card.Link>
            <Button variant="warning" onClick={this.props.onDelete}>🗑️</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Cards;
