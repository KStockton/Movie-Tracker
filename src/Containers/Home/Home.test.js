import React from 'react';
import { Home, mapStateToProps, mapDispatchToProps } from './Home';
import { shallow } from 'enzyme';
import { addTopMovies } from '../../Actions/index';
import * as MD from '../../Utility/MockData/MockData'

const mockTopMovies = jest.fn()

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (<Home addTopMovies={mockTopMovies} topMovies={MD.cleanMovies} user={MD.mockUser}/>)
  })

  it('Home component should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })
  it('should have a default state', () => {
    expect(wrapper.state('topMovies')).toEqual([])
    expect(wrapper.state('moviesArray')).toEqual([])
  })

  it('should call getTopMovies when componentDidMount is called', async () => {
   await wrapper.instance().componentDidMount();
    expect(mockTopMovies).toHaveBeenCalled();
  })

  it('should call dispatch when using addTopMovies props function', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = addTopMovies(MD.cleanMovies)

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addTopMovies(MD.cleanMovies)
    
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

})     