import React from 'react';
import {CardContainer} from './CardContainer';
import { shallow } from 'enzyme'
import * as MD from '../../Utility/MockData/MockData'



const mockUser = {
  id: 3,
  email: "weOn@gmail",
  favorites: 
    MD.cleanMovies,
  name: "Will",
  password: "nimawesome"
}

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer user={mockUser} topMovies={MD.cleanMovies}/>)
  })

  it('CardContainer component should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})