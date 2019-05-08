import * as actions from "../index";

describe("actions", () => {
  it("should return a type of ADD_TOP_MOVIES", () => {
    const topMovies = [];
    const expected = { type: "ADD_TOP_MOVIES", topMovies: [] };
    const result = actions.addTopMovies(topMovies);
    expect(result).toEqual(expected);
  });
});
