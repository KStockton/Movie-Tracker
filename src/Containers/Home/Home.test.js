import React from 'react';
import { Home } from './Home';
import { shallow } from 'enzyme';


describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Home/>
    )
  })

  it('Home component should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should call getTopMovies on componentDidMount', () => {
  })


})