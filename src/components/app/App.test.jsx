import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvents from '@testing-library/react';

describe('App component', () => {
  describe('Header component', () => {
    it('selects a subreddit', () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      const subredditInput = screen.getByLabelText('subreddit');
      const subredditButton = screen.getByTestId('subreddit-button');

      userEvent.getByPlaceholderText(subredditInput, 'news');
      userEvents.click(subredditButton);

      return waitFor(() => {
        screen.getByText('Searching for news')
      });
    });
  });

});
