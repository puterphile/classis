import classis from "..";

describe("overriding classes", () => {
  it("should remove `red` class", () => {
    const className = classis("btn", "red", ["rounded"], { red: false });

    expect(className).toEqual("btn rounded");
  });

  it("should replace `red` class with `blue` class", () => {
    const className = classis("btn", "red", ["rounded"], { red: "blue" });
    expect(className).toEqual("btn rounded blue");
  });
});
