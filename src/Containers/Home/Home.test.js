import React from 'react';
import { Home } from './Home';
import { shallow } from 'enzyme';
import * as MD from '../../Utility/MockData/MockData'


describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (<Home topMovies={MD.cleanMovies}/>)
  })

  it('Home component should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })



})