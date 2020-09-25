import React, { } from 'react';
import { Route, Switch, } from 'react-router-dom';
import './App.css';
import {Container} from "semantic-ui-react";
import NavBar from './components/Navbar';
import Home from "./components/Home";
import Departments from "./department/Departments";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Departments />
        </Switch>
      </Container>
    </>
  )
};
  

export default App;
