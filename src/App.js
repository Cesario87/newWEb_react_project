import './App.css';
import Head from './components/Head';
import Footer from './components/Footer';
import Main from './components/Main';
import { userContext } from './context/userContext';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState("noName"); // state para componente funcional

  const login = (name) => setUser(name); // user = name. Ej. name="Guille" --> user="Guille"
  const logout = () => setUser(""); // user = ""

  const data = {
    user,
    login,
    logout
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={data}>
          <Head />
          <Main />
        </userContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
