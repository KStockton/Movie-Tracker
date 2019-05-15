import React from 'react';
import { Favorites, mapStateToProps, mapDispatchToProps } from './Favorites';
import { shallow } from 'enzyme';
import * as MD from '../../Utility/MockData/MockData';
import { addTopMovies } from '../../Actions/index';


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

  it('should call dispatch when using addTopMovies props function', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = addTopMovies(MD.cleanMovies)

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addTopMovies(MD.cleanMovies)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  // it('should call dispatch when using a function from MDTP', () => {
  //   const mockDispatch = jest.fn()
  //   const actionToDispatch = addTodo('Learn Redux', 1)

  //   const mappedProps = mapDispatchToProps(mockDispatch)
  //   mappedProps.handleSubmit('Learn Redux', 1)
  //   expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  // })

})
