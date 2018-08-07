import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders div without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders header without crashing', () => {
  const header  = document.createElement('header');
  ReactDOM.render(<App />, header);
  ReactDOM.unmountComponentAtNode(header);
});

it('renders title text without crashing', () => {
  const h1 = document.createElement('h1');
  h1.innerHTML = 'YYZ Engine Hello World';
  ReactDOM.render(<App />, h1);
  ReactDOM.unmountComponentAtNode(h1);
});

it('renders second div without crashing', () => {
  const secondDiv = document.createElement('secondDiv');
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
