import classis from "..";

describe("ignore undefined, nullish, false classes", () => {
  it("should ignore no meaning values", () => {
    const className = classis(
      "btn",
      undefined,
      ["rounded", null, [undefined], [[false]]],
      { f: undefined }
    );

    expect(className).toEqual("btn rounded");
  });
});
