import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HomeForm } from "../Component/Home/HomeForm";
import store from "../Redux/index";
import { Provider } from "react-redux";

describe("HomeForm component", () => {
  it("renders navigation links", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomeForm />
        </BrowserRouter>
      </Provider>
    );

    const homeLink = screen.getByText(/home/i);
    const dashboardLink = screen.getByText(/dashboard/i);
    const loginLink = screen.getByText(/login/i);
    const aboutUsLink = screen.getByText(/aboutUs/i);
    const contactLink = screen.getByText(/contact/i);

    expect(homeLink).toBeInTheDocument();
    expect(dashboardLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    expect(aboutUsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it("renders content", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomeForm />
        </BrowserRouter>
      </Provider>
    );

    const descriptionText = screen.getByText(/Logic Games 4Fun/i);
    const getStartedButton = screen.getByText(/getStarted/i);
    const brainIcon = screen.getByAltText(/Brain icon/i);

    expect(descriptionText).toBeInTheDocument();
    expect(getStartedButton).toBeInTheDocument();
    expect(brainIcon).toBeInTheDocument();
  });

  it("renders facts", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomeForm />
        </BrowserRouter>
      </Provider>
    );

    const fact1Text = screen.getByText(/fact1/i);
    const fact2Text = screen.getByText(/fact2/i);
    const bulbIcons = screen.getAllByAltText(/Bulb icon/i);

    expect(fact1Text).toBeInTheDocument();
    expect(fact2Text).toBeInTheDocument();
    expect(bulbIcons.length).toBe(2);
  });
});
