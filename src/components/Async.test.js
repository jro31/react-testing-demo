import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});

// Further resources:
// Jest docs - https://jestjs.io/docs/getting-started
// React Testing Lbrary docs - https://testing-library.com/docs/
// react-hooks-testing-library - https://github.com/testing-library/react-hooks-testing-library
