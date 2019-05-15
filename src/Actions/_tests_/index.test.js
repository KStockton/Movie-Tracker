import * as actions from "../index";

describe("actions", () => {
  it("should return a type of ADD_TOP_MOVIES", () => {
    const topMovies = [];
    const expected = { type: "ADD_TOP_MOVIES", topMovies: [] };
    const result = actions.addTopMovies(topMovies);
    expect(result).toEqual(expected);
  });
  it("should return a type of ADD_USER", () => {
    const user = { favorites: [] };
    const expected = { type: "ADD_USER", user: { favorites: [] } };
    const result = actions.addUser(user);
    expect(result).toEqual(expected);
  });
  it("should return a type of REMOVE_USER", () => {
    const user = { favorites: [] };
    const expected = { type: "REMOVE_USER", user: { favorites: [] } };
    const result = actions.removeUser(user);
    expect(result).toEqual(expected);
  });
  it("should return a type of SET_USER_FAVORITE", () => {
    const user = { favorites: [] };
    const expected = { type: "SET_USER_FAVORITE", user: { favorites: [] } };
    const result = actions.setUserFavorites(user);
    expect(result).toEqual(expected);
  });
});
