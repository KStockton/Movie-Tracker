import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme'
import * as MD from '../../Utility/MockData/MockData'



describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (<CardContainer topMovies={MD.cleanMovies} user={MD.mockUser}/>)
  })

  it('CardContainer component should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should render 3 card components', () => {
    expect(wrapper.find('ConnectionFunction')).toHaveLength(2)
  })

}) 