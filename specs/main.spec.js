describe("inline custom plugin", () => {
  it("should mangle the data", () => {
    $.get("/data.json").then(res => {
      expect(res.foo).toEqual("wibbles");
    });
  });
});