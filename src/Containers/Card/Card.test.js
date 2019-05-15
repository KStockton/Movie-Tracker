
import React from "react";
import { Card, mapStateToProps, mapDispatchToProps } from "./Card";
import { shallow } from "enzyme";
import { postUsers } from '../../Utility/Fetches/PostUsers';
import * as MD from '../../Utility/MockData/MockData'

 describe("Card", () => {
  let wrapper;
  jest.mock('../../Utility/Fetches/PostUsers');

  
  beforeEach(() => {
    wrapper = shallow(<Card user={MD.mockUser.favorites} movie={MD.cleanMovies} />);
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