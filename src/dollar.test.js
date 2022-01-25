import { Dollar } from "./dollar";

describe("Multi Money Class", () => {
  test("Multiplication from 5 to be equal 10", () => {
    let five = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
  });
});
