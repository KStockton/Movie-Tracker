import React from 'react';
import {Movie} from './Movie';
import { shallow , mount} from 'enzyme';
import * as MD from '../../Utility/MockData/MockData'


const mockMovieProp = MD.movieProp

describe('Movie', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount (
        <Movie movie={mockMovieProp}/>
    )
  })

  it.skip('movie component should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
