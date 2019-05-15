import { userReducer } from "../userReducer";
import * as actions from "../../Actions";
describe("addTopMoviesReducer", () => {
  it("should return the initial state", () => {
    const expected = { favorites: [] };
    const result = userReducer(undefined, []);
    expect(result).toEqual(expected);
  });
  it("should add a user", () => {
    const mockUser = {
      name: "max",
      id: 2,
      email: "maxbsilver@gmail.com",
      favorites: []
    };
    const expected = {
      name: "max",
      id: 2,
      email: "maxbsilver@gmail.com",
      favorites: []
    };
    const result = userReducer(undefined, actions.addUser(mockUser));
    expect(result).toEqual(expected);
  });
  it("should set user favorites", () => {
    const mockUser = {
      name: "max",
      id: 2,
      email: "maxbsilver@gmail.com",
      favorites: []
    };
    const expected = {
      name: "max",
      id: 2,
      email: "maxbsilver@gmail.com",
      favorites: []
    };
    const result = userReducer(mockUser, actions.setUserFavorites([]));
    expect(result).toEqual(expected);
  });
});
