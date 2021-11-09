import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders "Hello World" as text', () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was NOT clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText('good to see you', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button'); // Could also get it by the button text using 'getByText'
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });
});
