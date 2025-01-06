import { render, screen } from "@testing-library/react";
import Message from "./Message";
import userEvent from "@testing-library/user-event";

describe("Message comp", () => {
  describe("Q1 初期表示正常性確認", () => {
    test("input要素表示", () => {
      //   console.log("A");
      render(<Message />);
      const inputEl = screen.getByRole("textbox");
      expect(inputEl).toBeInTheDocument();
    });
  });
  describe("Q2 入力動作正常性確認", () => {
    test("input動作確認", async() => {
      const user = userEvent.setup();
      render(<Message />);
      const inputEl = screen.getByRole("textbox");
      await user.type(inputEl,"こんにちは");
      expect(inputEl.value).toBe("こんにちは");
    });
  });
});
