import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

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
