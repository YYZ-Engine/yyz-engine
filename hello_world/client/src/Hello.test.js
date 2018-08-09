import React from 'react';
import Hello from './Hello';
import {shallow} from 'enzyme';
import fetch from "isomorphic-fetch";

describe('renders response from Hello API call',() => {
  const hello = new Hello();

  test('status is 200', async() => {
    const response = await fetch('http://localhost:5000/api/hello?json');
    expect(response.status).toBe(200);
  });

  test('the data is defined', async() => {
    const data = await hello.callHelloAPI();
    expect(data).toBeDefined();
  });

  test('the API fails with an error', async() => {
    try {
      await hello.callHelloAPI();
    } catch (e) {
      expect(e).toBeDefined();
    }
  });
});
