import {render, screen, fireEvent} from "@testing-library/react";
import App from "./App";

jest.mock('./Greeting/Greeting', () => {
        return () => <h1>Mocked Greeting</h1>
});

test('renders App Component', () => {
    render(<App />);
    const header = screen.getByText("App Component");
    expect(header).toBeInTheDocument();
});

test('renders Greeting component', () => {
    render(<App />);
    const header = screen.getByText("Mocked Greeting");

    expect(header).toBeInTheDocument();
}); 