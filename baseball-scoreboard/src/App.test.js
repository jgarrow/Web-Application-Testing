import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
    render(<App />);
});

test("addBall adds 1 to ball", () => {
    const { getByText, getByTestId } = render(<App />);

    fireEvent.click(getByText(/add ball/i));

    expect(getByTestId("balls")).toHaveTextContent("1");
});

test("if balls are at 3, addBall sets ball to 0", () => {
    const { getByText, getByTestId } = render(<App />);

    fireEvent.click(getByText(/add ball/i));
    fireEvent.click(getByText(/add ball/i));
    fireEvent.click(getByText(/add ball/i));
    fireEvent.click(getByText(/add ball/i));

    expect(getByTestId("balls")).toHaveTextContent("0");
});

test("addStrike adds 1 to strike", () => {
    const { getByText, getByTestId } = render(<App />);

    fireEvent.click(getByText(/add strike/i));

    expect(getByTestId("strikes")).toHaveTextContent("1");
});

test("if strikes are at 2, addStrike sets strike to 0", () => {
    const { getByText, getByTestId } = render(<App />);

    fireEvent.click(getByText(/add strike/i));
    fireEvent.click(getByText(/add strike/i));
    fireEvent.click(getByText(/add strike/i));

    expect(getByTestId("strikes")).toHaveTextContent("0");
});

test("addFoul adds 1 to foul", () => {
    const { getByText, getByTestId } = render(<App />);

    fireEvent.click(getByText(/add foul/i));

    expect(getByTestId("fouls")).toHaveTextContent("1");
});

test("addFoul adds 1 to strike", () => {
    const { getByText, getByTestId } = render(<App />);

    fireEvent.click(getByText(/add foul/i));

    expect(getByTestId("strikes")).toHaveTextContent("1");
});

test("recordHit sets balls to 0", () => {
    const { getByText, getByTestId } = render(<App />);

    fireEvent.click(getByText(/record hit/i));

    expect(getByTestId("balls")).toHaveTextContent("0");
});

test("recordHit sets strikes to 0", () => {
    const { getByText, getByTestId } = render(<App />);

    fireEvent.click(getByText(/record hit/i));

    expect(getByTestId("strikes")).toHaveTextContent("0");
});

test("recordHit sets fouls to 0", () => {
    const { getByText, getByTestId } = render(<App />);

    fireEvent.click(getByText(/record hit/i));

    expect(getByTestId("fouls")).toHaveTextContent("0");
});
