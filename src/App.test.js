import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
