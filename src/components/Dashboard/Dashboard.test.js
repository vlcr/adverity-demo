import React from 'react';
import { act, render, cleanup, waitForElement, waitForElementToBeRemoved } from '@testing-library/react';

import Dashboard from './Dashboard';
import * as CSVParser from '../../utils/CSVParser/CSVParser';


describe('Dashboard', () => {
  beforeEach(() => {
    CSVParser.parseFile = jest.fn(() => Promise.resolve(act([])));
  })

  afterEach(() => { 
    CSVParser.parseFile.mockClear() 
    cleanup();
  });

  it('contains loading information at the start', () => {
    act(() => {
      const { getByText } = render(<Dashboard />);
      getByText('"Loading data. Please wait."');
    });
  });

  it('calls for CSV file', () => {
    act(() => {
      render(<Dashboard />);
    });

    expect(CSVParser.parseFile).toBeCalled();
  });

  it('removes loading text after displaying the chart', async () => {
    await act(async () => {
      const { getByText } = render(<Dashboard />)

      await waitForElementToBeRemoved(() => getByText('"Loading data. Please wait."'));
    });
  });
});