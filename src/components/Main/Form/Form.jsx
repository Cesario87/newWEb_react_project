import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: "",
      abstract: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { main, abstract } = this.state;
    const newArticle = { main, abstract };
    this.props.addArticle(newArticle);
    this.setState({ main: "", abstract: "" });
  };

  handleCancel = () => {
    this.setState({ main: "", abstract: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { main, abstract } = this.state;
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
        <button type="submit">Submit</button>
        <button type="button" onClick={this.handleCancel}>
          Clear
        </button>
      </form>
    );
  }
}

export default Form;


