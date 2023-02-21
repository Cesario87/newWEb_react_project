import React, { Component } from "react";
import Home from './Home';
import Form from './Form';
import ListNews from './ListNews';
import { Routes, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/list" element={<ListNews />} />
    </Routes>
  </main>;
  }
}

export default Main;
