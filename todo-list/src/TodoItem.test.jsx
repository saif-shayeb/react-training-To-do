import React from "react";
import { render, screen } from "@testing-library/react";
import { TodoItem } from "./TodoItem";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

const firstItem = { id: 1, name: "first todo", done: false };
describe("todo item", () => {
  it("renders the contents of a todo item", () => {
    render(<TodoItem item={firstItem} />);
    expect(screen.queryByText("first todo")).toBeInTheDocument();
  });
});
