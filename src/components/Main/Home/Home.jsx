import React, { Component } from "react";
import { userContext } from '../../../context/userContext'; // contexto
import Button from 'react-bootstrap/Button';
import { InputGroup, Form } from 'react-bootstrap';

class Home extends Component {

  static contextType = userContext; //Contexto desde JS con clases

  constructor(props) {
    super(props)
  
    this.username = React.createRef();

    this.state = {
      username:""
    }
  }

  sendName = () => {
    //***CONSUMER***
    const {login} = this.context; // Consume contexto desde JS
    
    login(this.state.username);// enviar nombre por contexto. Ejecuta la función que viene del context
    alert("Nombre enviado: " + this.state.username);
    
    // Vaciar input + state
    this.username.current.value = "";
    this.setState({ username: "" });
  }

  handleChange = () => {
    const username = this.username.current.value; //Leer campo por referencia
    this.setState({ username });
  }

  render() {
    return <div>
    <div>
        <h3>Welcome to Gamer News 👾</h3>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
        <Form.Control
          ref={this.username}
          placeholder="Identify yourself..."
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </InputGroup>
        {this.state.username ? <Button variant="info" onClick={this.sendName}>Login</Button>: ""}
      </div>
  </div>;
  }
}

export default Home;
