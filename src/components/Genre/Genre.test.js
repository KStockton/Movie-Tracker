import React from 'react';
import Genre from './Genre';
import { shallow } from 'enzyme'

describe('Genre', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (<Genre/>)
  })

  it('Genre component should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })


})