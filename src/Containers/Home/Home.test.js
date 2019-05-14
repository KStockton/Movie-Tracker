import React from 'react';
import { Home, mapStateToProps, mapStateToDispatch } from './Home';
import { shallow } from 'enzyme'; 



let mockTopMovies = jest.fn()

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Home mockgetTopMovies={mockTopMovies}/>
    )
  })

  it.skip('Home component should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should call getTopMovies on componentDidMount', () => {
    console.log(wrapper.instance())
  })


})