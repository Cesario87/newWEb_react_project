import React, { Component } from "react";
import { userContext } from '../../../context/userContext'; // contexto

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
        <h1>Identify yourself</h1>
        <input type="text" ref={this.username} onChange={this.handleChange} placeholder="Your username goes here..." />
        {this.state.username ? <button onClick={this.sendName}>Login</button> : ""}
      </div>
  </div>;
  }
}

export default Home;
