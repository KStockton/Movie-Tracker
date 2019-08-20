import React from './node_modules/react';
import { Movie } from './Movie';
import { shallow } from './node_modules/enzyme';
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
