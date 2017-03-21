describe("inline custom plugin", () => {
  it("should mangle the data", () => {
    $.get("/data.json").then(res => {
      expect(res.foo).toEqual("wibbles");
    });
  });
  it("should have the config injected", () => {
    $.get("/data.json").then(res => {
      expect(res.moo).toEqual("said the cow");
    });
  });
});