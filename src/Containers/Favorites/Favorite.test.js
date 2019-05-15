import React from 'react';
import { Favorites, mapStateToProps, mapDispatchToProps } from './Favorites';
import { shallow } from 'enzyme';
import * as MD from '../../Utility/MockData/MockData'


describe('Favorites', () => {
  let wrapper

  beforeEach(() => {
      wrapper = shallow(<Favorites user={MD.mockUser}/>)
  })

  it('Favorite component render Login in to see favorites if not recieving user props', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should return a props object with a movies array', () => {
    const mockState = {
      topMovies: [
        {'title': "SpaceJam"}
      ]
    }
    const expected = {
      topMovies: mockState.topMovies
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })

  it('should return a p')

})
