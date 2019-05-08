import { addTopMoviesReducer } from "../addTopMoviesReducer";
import * as actions from "../../Actions";
describe("addTopMoviesReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = addTopMoviesReducer(undefined, []);
    expect(result).toEqual(expected);
  });
  it("should return the state with an array of movies", () => {
    const mockTopMovies = [{ title: 1 }, { title: 2 }, { title: 3 }];
    const expected = [{ title: 1 }, { title: 2 }, { title: 3 }];
    const result = addTopMoviesReducer([], actions.addTopMovies(mockTopMovies));
    expect(result).toEqual(expected);
  });
});
 