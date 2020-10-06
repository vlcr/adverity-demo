import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('contains proper components', () => {
    const component = shallow(<App />);

    expect(component.contains(<Dashboard />)).toBeTruthy();
    expect(component.contains(<Header />)).toBeTruthy();
  });
});
