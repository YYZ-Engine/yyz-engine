import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './Home';

const div = document.createElement('div');

it('renders a div with className "App-intro" without crashing', () => {
  div.className = 'App-intro';
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const introParagraph  = document.createElement('p');

it('renders paragraph without crashing', () => {
  div.appendChild(introParagraph);
  ReactDOM.render(<Home />, introParagraph);
  ReactDOM.unmountComponentAtNode(introParagraph);
});

it('renders paragraph text without crashing', () => {
  introParagraph.innerHTML = 'Welcome to YYZ Engine Hello World app, where you can get a custom greeting, or get your location';
  ReactDOM.render(<Home />, introParagraph);
  ReactDOM.unmountComponentAtNode(introParagraph);
});
