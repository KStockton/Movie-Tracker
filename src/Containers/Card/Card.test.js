
import React from "react";
import { Card, mapStateToProps, mapDispatchToProps } from "./Card";
import { shallow } from "enzyme";
import { postUsers } from '../../Utility/Fetches/PostUsers';
import { setUserFavorites } from '../../Actions/index';
import * as MD from '../../Utility/MockData/MockData'

const setFavoritesmock =jest.fn()


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
    wrapper = shallow(<Card user={MD.mockUserWithFav} movie={MD.cleanMovies} />);
  }); 

   it("Card component should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call dispatch when using addTopMovies props function', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = setUserFavorites(MD.mockUserWithFav)

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setUserFavorites(MD.mockUserWithFav)
    
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should return a props object with a user', () => {
    const mockState = {
      user: {
        id: 55,
        name: "nim",
        password: 'nimisawesome',
        email: "nim@sum.com"
      }
    }

    const expected = {
      user: mockState.user
    } 

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })

  it('should return a props object with a movies array', () => {
    const mockState = { topMovies: [{ 'title': "Space Jam" }]}
    const expected = {
      topMovies: mockState.topMovies
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })

});   


   describe("setFavorites", () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(<Card user={MD.mockUserWithFav} movie={MD.cleanMovies} />);
    }); 

    it.skip("should return displayMovie when checkFavorite is called", () => {
    wrapper.instance().checkFavorite()
    let mockgetFavoriteIDs = [{ id:12323 }, { id:342234 }]
    let mockMovieId = 12323
    
      expect(mockgetFavoriteIDs).toHaveBeenCalled();
    });
  }); 
    
      describe("handleFavorite", () => {
        const mockHandleFavorite = jest.fn()
      let wrapper
      beforeEach(() => {
        wrapper = shallow(<Card user={MD.mockUserWithFav} movie={MD.cleanMovies} handleFavorite={mockHandleFavorite}/>);
      }); 

      it('should call handle favorite when button is clicked ', () => {
        wrapper.find('#but').childAt(0).simulate('click', () => {
          expect(mockHandleFavorite).toHaveBeenCalled()
        })
      })
 });
      