/* eslint-disable no-unused-expressions */

import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

jest.mock('./Rockets');
jest.mock('./Mission');
jest.mock('./Missions');
jest.mock('./MyProfile');

describe('Header component', () => {
  test('Rockets header render', () => {
    const app = render(<App />);
    expect(app.getByText(/Rockets/)).toBeInTheDocument;
  });
  test('Missions button render', () => {
    const app = render(<App />);
    expect(app.getByText(/Missions/)).toBeInTheDocument;
  });

  test('My Profile render', () => {
    const app = render(<App />);
    expect(app.getByText(/My profile/)).toBeInTheDocument;
  });
});

describe('Rockets component', () => {
  test('Rockets title render', () => {
    const app = render(<App />);
    expect(app.getByText(/Falcon 1/)).toBeInTheDocument;
  });
  test('Rockets button render', () => {
    const app = render(<App />);
    expect(app.getByText(/Reserve Rocket/)).toBeInTheDocument;
  });
});

describe('Missions component', () => {
  test('Mission title render', () => {
    const app = render(<App />);
    userEvent.click(app.getByText('Missions'));
    expect(app.getByText(/Taicom/)).toBeInTheDocument;
  });

  test('Mission description', () => {
    const app = render(<App />);
    userEvent.click(app.getByText('Missions'));
    expect(app.getByText(/series of communications/)).toBeInTheDocument;
  });

  test('Mission status', () => {
    const app = render(<App />);
    userEvent.click(app.getByText('Missions'));
    expect(app.getByText(/Active member/)).toBeInTheDocument;
  });

  test('Mission button', () => {
    const app = render(<App />);
    userEvent.click(app.getByText('Missions'));
    expect(app.getByText(/Leave Mission/)).toBeInTheDocument;
  });
});

describe('My Profile component', () => {
  test('Missions title', () => {
    const app = render(<App />);
    userEvent.click(app.getByText('My profile'));
    expect(app.getByText(/My Missions/)).toBeInTheDocument;
  });

  test('Missions list', () => {
    const app = render(<App />);
    userEvent.click(app.getByText('My profile'));
    expect(app.getByText(/First Mission/)).toBeInTheDocument;
  });

  test('Rockets title', () => {
    const app = render(<App />);
    userEvent.click(app.getByText('My profile'));
    expect(app.getByText(/My Rockets/)).toBeInTheDocument;
  });

  test('Rockets list', () => {
    const app = render(<App />);
    userEvent.click(app.getByText('My profile'));
    expect(app.getByText(/First Rocket/)).toBeInTheDocument;
  });
});
