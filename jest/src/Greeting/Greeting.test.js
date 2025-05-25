import Greeting from "./Greeting";
import {render, screen, fireEvent} from "@testing-library/react";

test('renders greeting then name', () => {
    render(<Greeting name ="Alice"/>);
    const element = screen.getByText("Hello Alice");
    expect(element).toBeInTheDocument();
});


describe('Button related', () => {
    test('button exists in the document with title Start', () => {
        render(<Greeting name="Name" />);
        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Start");
    });

    test('button calls onClick handler when clicked', () => {
        const mockOnClick = jest.fn();
        render(<Greeting name="Name" onClick={mockOnClick} />);
        const button = screen.getByRole('button');

        fireEvent.click(button);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});