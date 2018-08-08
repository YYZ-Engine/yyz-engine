import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import Home from './Home';
import Hello from './Hello';
import World from './World';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const firstDiv = document.createElement('firstDiv');

it('renders the first div without crashing', () => {
  ReactDOM.render(<App />, firstDiv);
  ReactDOM.unmountComponentAtNode(firstDiv);
});

it('renders a div with className "App" without crashing', () => {
  firstDiv.className = 'App';
  ReactDOM.render(<App />, firstDiv);
  ReactDOM.unmountComponentAtNode(firstDiv);
});

const header  = document.createElement('header');

it('renders header without crashing', () => {
  ReactDOM.render(<App />, header);
  ReactDOM.unmountComponentAtNode(header);
});

it('renders header with className "App-header" without crashing', () => {
  header.className = 'App-header';
  ReactDOM.render(<App />, header);
  ReactDOM.unmountComponentAtNode(header);
});

const h1 = document.createElement('h1');
h1.innerHTML = 'YYZ Engine Hello World';

it('renders title text without crashing', () => {
  ReactDOM.render(<App />, h1);
  ReactDOM.unmountComponentAtNode(h1);
});

it('renders title text with className "App-title" without crashing', () => {
  h1.className = 'App-title';
  ReactDOM.render(<App />, h1);
  ReactDOM.unmountComponentAtNode(h1);
});

const secondDiv = document.createElement('secondDiv');

it('renders second div without crashing', () => {
  ReactDOM.render(<App />, secondDiv);
  ReactDOM.unmountComponentAtNode(secondDiv);
});

it('renders second div with className "App-intro" without crashing', () => {
  secondDiv.className = 'App-intro';
  ReactDOM.render(<App />, secondDiv);
  ReactDOM.unmountComponentAtNode(secondDiv);
});

it('renders paragraph without crashing', () => {
  const introParagraph  = document.createElement('introParagraph');
  ReactDOM.render(<App />, introParagraph);
  ReactDOM.unmountComponentAtNode(introParagraph);
});

it('renders paragraph text without crashing', () => {
  const pText = document.createElement('pText');
  pText.innerHTML = 'Welcome to YYZ Engine Hello World app, where you can get a custom greeting, or get your location';
  ReactDOM.render(<App />, pText);
  ReactDOM.unmountComponentAtNode(pText);
});

const router = document.createElement('Router');
const routerChild = document.createElement('Switch');

it('renders Router without crashing', () => {
  ReactDOM.render(<App />, router);
  ReactDOM.unmountComponentAtNode(router);
});

it('renders Switch without crashing', () => {
  router.appendChild(routerChild);
  ReactDOM.render(<App />, routerChild);
  ReactDOM.unmountComponentAtNode(routerChild);
});

it('renders home route without crashing', () => {
  const homeRoute = document.createElement('Route');
  homeRoute.props = { 'path':'/', 'exact':true, 'component':Home };
  routerChild.appendChild(homeRoute);
  ReactDOM.render(<App />, homeRoute);
  ReactDOM.unmountComponentAtNode(homeRoute);
});

it('renders second route without crashing', () => {
  const helloRoute = document.createElement('Route');
  helloRoute.props = { 'path':'/hello', 'component':Hello };
  routerChild.appendChild(helloRoute);
  ReactDOM.render(<App />, helloRoute);
  ReactDOM.unmountComponentAtNode(helloRoute);
});

it('renders third route without crashing', () => {
  const worldRoute = document.createElement('Route');
  worldRoute.props = { 'path':'/world', 'component':World };
  routerChild.appendChild(worldRoute);
  ReactDOM.render(<App />, worldRoute);
  ReactDOM.unmountComponentAtNode(worldRoute);
});
