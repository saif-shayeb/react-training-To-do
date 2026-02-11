import React from "react";
import { it, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});
test("clicking add will add a new todo to the list", async () => {
  const user = userEvent.setup();
  render(<App />);
  const input = screen.getByPlaceholderText("insert new Todo");
  await user.type(input, "new todo!");
  await user.click(screen.getByText("add"));
  expect(screen.queryByText("new todo!")).toBeInTheDocument();
});
test("clicking delete will remove the todo from the list", async () => {
  render(<App />);
  const user = userEvent.setup();
  const deleteButton = screen.getByLabelText("delete first todo");
  await userEvent.click(deleteButton);

  // Expect it no longer in the document
  expect(screen.queryByText("first todo")).not.toBeInTheDocument();
});
