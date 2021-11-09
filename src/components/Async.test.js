import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    render(<Async />);

    // We use 'findAllByRole()' (instead of 'getAllByRole()') because the <Async> component runs an asynchronous function
    // 'get' assesses the items that are immediately on the screen
    // 'find' returns a promise, and React 'testing-library' will re-evaluate the screen mutiple times, until 'screen.findAllByRole('listitem')' succeeds
    // (we can't just use 'findByRole()' here, because there will be multiple '<li>' elements, so it would fail)
    // 'findAllByRole' accepts an optional third argument (the second being the '{ exact: true }' object). The third argument sets the time to wait until 'screen.findAllByRole('listitem')' must be true
    // The default is 1 second (no example was given how to set this time, but I think in an object)
    const listItemElements = await screen.findAllByRole('listitem'); // See 'https://www.w3.org/TR/html-aria/#docconformance' for roles
    expect(listItemElements).not.toHaveLength(0);
  });
});
