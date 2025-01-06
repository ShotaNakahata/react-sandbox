import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Message from "./Message";
import userEvent from "@testing-library/user-event";

describe("Message Comp test", () => {
  describe("初期表示確認", () => {
    test("入力された文字の表示確認", () => {
      render(<Message />);
      const h2El = screen.getByRole("heading",{name:"入力された文字:"});
      // console.log(h2El)
      expect(h2El).toBeInTheDocument();
    });
    
  });
  describe("画面操作正常性確認", () => {
    test("入力値の変更 -> 送信ボタン押下",async () => {
      const user = userEvent.setup()
      render(<Message />);
      const inputEl = screen.getByRole("textbox")
      const btnEl = screen.getByRole("button");
      const h2El = screen.getByRole("heading",{name:"入力された文字:"});

      expect(btnEl).toBeDisabled();
      expect(inputEl.value).toBe("");
      expect(h2El).toBeInTheDocument();

      await user.type(inputEl,"こんにちは");
      expect(inputEl.value).toBe("こんにちは");
      expect(btnEl).not.toBeDisabled();

      await user.click(btnEl)
      expect(inputEl.value).toBe("");
      expect(h2El.textContent).toBe("入力された文字:こんにちは");
    });
    
  });
});
