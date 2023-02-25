import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: "",
      abstract: "",
      web_url: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { main, abstract, web_url } = this.state;
    const newArticle = { main, abstract, web_url };
    this.props.addArticle(newArticle);
    this.setState({ main: "", abstract: "", web_url: "" });
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
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Main:
          <input
            type="text"
            name="main"
            value={main}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Abstract:
          <input
            type="text"
            name="abstract"
            value={abstract}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Web_url:
          <input
            type="url"
            name="web_url"
            value={web_url}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <Button variant="info" type="submit">Submit</Button>
        <Button variant="secondary" type="button" onClick={this.handleCancel}>Clear</Button>
      </form>
    );
  }
}

export default Form;


