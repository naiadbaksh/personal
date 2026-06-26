import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroSection from "./HeroSection";

jest.mock("react-typical", () => () => <div data-testid="typical" />);
jest.mock("../button/button.component", () => () => null);
jest.mock("../navbar/Navbar", () => () => null);
jest.mock("../chatbot/chatbot.component", () => ({
  __esModule: true,
  default: ({ onClose }) => (
    <div data-testid="chatbot">
      {onClose ? <button onClick={onClose}>X</button> : null}
    </div>
  ),
}));

describe("HeroSection chatbot controls", () => {
  it("opens from the pinned icon and closes with the X button", () => {
    const { container } = render(<HeroSection />);

    const iconButton = container.querySelector(".chatbot-button");
    expect(iconButton).toBeInTheDocument();

    fireEvent.click(iconButton);
    expect(screen.getByTestId("chatbot")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /x/i }));
    expect(screen.queryByTestId("chatbot")).not.toBeInTheDocument();
  });
});
