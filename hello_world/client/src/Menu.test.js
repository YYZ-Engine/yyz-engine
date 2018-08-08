import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Home from './Home';
import Hello from './Hello';
import World from './World';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const router = document.createElement('Router');

it('renders Router without crashing', () => {
  ReactDOM.render(<Menu />, router);
  ReactDOM.unmountComponentAtNode(router);
});

const div = document.createElement('div');

it('renders the div without crashing', () => {
  router.appendChild(div);
  ReactDOM.render(<Menu />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const firstLink = document.createElement('Link');

it('renders first link without crashing', () => {
  firstLink.props = { 'to': '/' };
  div.appendChild(firstLink);
  ReactDOM.render(<Menu />, firstLink);
  ReactDOM.unmountComponentAtNode(firstLink);
});

it('renders | without crashing', () => {
  firstLink.innerHTML = '|';
  ReactDOM.render(<Menu />, firstLink);
  ReactDOM.unmountComponentAtNode(firstLink);
});

const secondLink = document.createElement('Link');

it('renders second link without crashing', () => {
  secondLink.props = { 'to': '/hello' };
  div.appendChild(secondLink);
  ReactDOM.render(<Menu />, secondLink);
  ReactDOM.unmountComponentAtNode(secondLink);
});

it('renders | without crashing', () => {
  secondLink.innerHTML = '|';
  ReactDOM.render(<Menu />, secondLink);
  ReactDOM.unmountComponentAtNode(secondLink);
});

const thirdLink = document.createElement('Link');

it('renders third link without crashing', () => {
  thirdLink.props = { 'to': '/world' };
  div.appendChild(thirdLink);
  ReactDOM.render(<Menu />, thirdLink);
  ReactDOM.unmountComponentAtNode(thirdLink);
});

it('renders /home route without crashing', () => {
  const homeRoute = document.createElement('Route');
  homeRoute.props = { 'path':'/', 'exact':true, 'component':Home };
  div.appendChild(homeRoute);
  ReactDOM.render(<Menu />, homeRoute);
  ReactDOM.unmountComponentAtNode(homeRoute);
});

it('renders /hello route without crashing', () => {
  const helloRoute = document.createElement('Route');
  helloRoute.props = { 'path':'/hello', 'component':Hello };
  div.appendChild(helloRoute);
  ReactDOM.render(<Menu />, helloRoute);
  ReactDOM.unmountComponentAtNode(helloRoute);
});

it('renders /world route without crashing', () => {
  const worldRoute = document.createElement('Route');
  worldRoute.props = { 'path':'/world', 'component':World };
  div.appendChild(worldRoute);
  ReactDOM.render(<Menu />, worldRoute);
  ReactDOM.unmountComponentAtNode(worldRoute);
});
