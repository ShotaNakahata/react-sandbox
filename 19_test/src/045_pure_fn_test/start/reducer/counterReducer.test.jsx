import { counterReducer } from "./counterReducer";

const initialstate = { count: 0, step: 1 };

describe("Counter Reducerの動作確認", () => {
  test("up", () => {
    const newState = counterReducer(initialstate, { type: "up" });
    expect(newState).toEqual({ count: 1, step: 1 })
  });
  test("down", () => {
    const newState = counterReducer(initialstate, { type: "down" });
    expect(newState).toEqual({ count: -1, step: 1 })
  });
  test("クリア", () => {
    const newState = counterReducer(initialstate, { type: "clear" });
    expect(newState).toEqual({ count: 0, step: 1 })
  });
  test("changeStep -> up", () => {
    const newState = counterReducer(initialstate, { type: "changeStep" ,payload:3});
    // console.log(newState)
    expect(newState).toEqual({ count: 0, step: 3 })

    const newState2 = counterReducer(newState, { type: "up" });
    expect(newState2).toEqual({ count: 3, step: 3 })
  });
});
