import React from 'react';
import { Movie } from './Movie';
import { shallow } from 'enzyme';
import * as MD from '../../Utility/MockData/MockData'

describe('Movie', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Movie location={MD.movieProp}/>)
  })

  it('movie component should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
