import React, { Component } from "react";
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router-dom';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: "",
      abstract: "",
      web_url: "",
      isSubmitted: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { main, abstract, web_url } = this.state;
    const newArticle = { main, abstract, web_url };
    this.props.addArticle(newArticle);
    this.setState({ main: "", abstract: "", web_url: "", isSubmitted: true });
  };

  handleCancel = () => {
    this.setState({ main: "", abstract: "", web_url: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { main, abstract, web_url } = this.state;
    return this.state.isSubmitted ? <Navigate to='/list' /> :
      <section>
        <form className="formatForm" onSubmit={this.handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
            <Form.Control
              ref={this.username}
              placeholder="Your title goes here..."
              aria-label="Title"
              aria-describedby="basic-addon1"
              type="text"
              name="main"
              value={main}
              onChange={this.handleChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Abstract</InputGroup.Text>
            <Form.Control
              placeholder="Your abstract goes here...
            ........
            ........
            ........"
              as="textarea"
              rows={10}
              name="abstract"
              value={abstract}
              onChange={this.handleChange}
              className="abstractFormat"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Web Url</InputGroup.Text>
            <Form.Control
              placeholder="Your article's link goes here..."
              type="url"
              name="web_url"
              value={web_url}
              onChange={this.handleChange}
            />
          </InputGroup>
          <div>
          <Button variant="info" type="submit">Submit</Button>
          <Button variant="secondary" type="button" onClick={this.handleCancel}>Clear</Button>
          </div>
        </form>
      </section>
  }
}

export default Forms;


