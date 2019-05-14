import React from "react";
import { Card, mapStateToProps, mapDispatchToProps } from "./Card";
import { shallow } from "enzyme";
import { postUsers } from '../../Utility/Fetches/PostUsers';

describe("Card", () => {
  let wrapper;
  jest.mock('../../Utility/Fetches/PostUsers');
  
  const mockUser = { favorites: [{ id: 1, movie_id: 1 }] };
  const mockMovie = {
    id: 2,
    movie_id: 2,
    overview: "overview-text",
    vote_average: 1,
    release_date: "2019",
    poster_path: "path",
    title: "title-text"
  };
  beforeEach(() => {
    wrapper = shallow(<Card user={mockUser} movie={mockMovie} />);
  });

  it("Card component should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("handleFavorite", () => {
    it.skip("should invoke setFavorites when the movie ID and user favorite ID do not match", () => {
      wrapper.instance().handleFavorite();

      wrapper.instance().setFavorites = jest.fn();
      expect(wrapper.instance().setFavorites).toHaveBeenCalled();
    });
  });
});
