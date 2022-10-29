import classis from "..";

describe("adding classes conditaionly", () => {
  it("should add `red` class", () => {
    const className = classis("btn", true && "red", ["rounded"]);

    expect(className).toEqual("btn red rounded");
  });

  it("should not add `blue` class", () => {
    const className = classis("btn", false && "blue", ["rounded"]);
    expect(className).toEqual("btn rounded");
  });
});
