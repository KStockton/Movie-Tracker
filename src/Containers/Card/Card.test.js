import React from 'react';
import { Card } from './Card';
import { shallow } from 'enzyme';
import * as MD from '../../Utility/MockData/MockData'


describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (<Card movie={MD.cleanMovies[0]} user={MD.mockUser.favorites}/>)
  })

  it('Card component should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })


})