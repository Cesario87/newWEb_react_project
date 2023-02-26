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
      <div className={"formatEachCard"}>
        <Card style={{ width: '18rem', padding: '0.5% 0%', margin: '4% 5%' }}>
          <Card.Body style={{ textAlign: 'left' }}>
            <Card.Title style={{ margin: '4% 0%' }}>{title}</Card.Title>
            <Card.Text>{abstract}</Card.Text>
            <Card.Link
              href={web_url}
              style={{
                margin: '0% 20% 0% 0%',
                fontSize: '18px',
                fontStyle: 'italic',
                color: 'blue'
              }}
            >
              Keep reading...
            </Card.Link>
            <Button variant="light" style={{ border: '1px solid black', height: '5vh' }} onClick={this.props.onDelete}>🗑️</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Cards;
