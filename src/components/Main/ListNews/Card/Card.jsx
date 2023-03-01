import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Cards extends Component {
  render() {
    const { article } = this.props;
    const abstract = article.abstract && article.abstract.substr(0, 100) + "...";
    const titleLong = article.headline && article.headline.main ? article.headline.main : article.main;
    const title = titleLong.length > 50 ? titleLong.substring(0, 50) + "..." : titleLong;
    const web_url = article.web_url;
    return (
      <div className={"formatEachCard"}>
        <Card className="each">
          <Card.Body className="bodyFormat">
            <Card.Title className="cardTitle">{title}</Card.Title>
            <Card.Text className="cardAbstract">{abstract}</Card.Text>
            <div className="cardFooter">
            <Card.Link
              href={web_url}
              className="linkFormat"
            >
              Keep reading...
            </Card.Link>
            <Button className="buttonFormat" variant="light" onClick={this.props.onDelete}>🗑️</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Cards;
