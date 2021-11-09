import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

// The three A's of testing:
// Arrange - setup the test data, conditions and environment
// Act - run any logic that should be tested (such as a function, or a button click)
// Assert - compare execution results with expected results
test('renders Hello World as text', () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ... nothing

  // Assert
  const helloWorldElement = screen.getByText('Hello World!', { exact: true });
  // The second argument is optional
  // If exact is false, then case won't matter, and it will also match substrings (such as 'ello')
  // true is the default, so we don't need the second argument here. Just left it for illustrative purposes.

  expect(helloWorldElement).toBeInTheDocument();
});
