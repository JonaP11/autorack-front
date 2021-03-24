import {render, screen} from '@testing-library/react';
import React from 'react';
import RequestSender from './api/utils/requestSender';
import App from './App';

test('renders learn react link', () => {
  render(<App/>);
  const linkElement = screen.getAllByText(/AutoRack/);
  expect(linkElement.length).toBeGreaterThan(0);
});

test('checks API is up', async () => {
  if (!await RequestSender.isApiAvailable()) {
    // Fail the test
    throw new Error('Backend API is not available. Make sure you correctly configured the URL and started it.');
  }
});

// TODO: [Test] take calculator as an example to create user-story tests and test for `RequestSender`
