import { render, screen } from "@testing-library/react";
import GetUserData from "./GetUserData";
import { ENDPOINT_URL } from "../Example";

describe("GetUser Comp 動作確認", () => {
  test("外部データ取得中", () => {
    const {debug,container} = render(<GetUserData url={ENDPOINT_URL} />);
    // debug(container)
    const headEl = screen.getByRole("heading", { name: "通信中です！" });
    expect(headEl).toBeInTheDocument();
    // debug(container)
  });
  test("外部データ取得後", async() => {
    render(<GetUserData url={ENDPOINT_URL} />);
    // debug(container)
    const headEl = await screen.findByRole("heading", { name: "プロフィール" });
    expect(headEl).toBeInTheDocument();

    const itemEls = await screen.findAllByRole("listitem")
    expect(itemEls[0].textContent).toBe("ID: 1")
    expect(itemEls[1].textContent).toBe("Name: CodeMafia")
    // debug(container)
  });
});
