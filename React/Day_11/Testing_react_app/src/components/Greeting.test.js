import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('render Hello World as a text', () => {
        render (<Greeting />);
        const HelloWorldText = screen.getByText('Hello World');
        expect(HelloWorldText).toBeInTheDocument();
});
    
test('renders good to see you if the button was not clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText('Hii There i am Vishal', {exact: false});
    expect(outputElement).toBeInTheDocument();
});

test('renders "Changed" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
});

test('does not render "Hii There i am Vishal" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText('Hii There i am Vishal', { exact: false});
    expect(outputElement).toBeNull();
});

});