import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme'
import * as MD from '../../Utility/MockData/MockData'


describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (<CardContainer/>)
  })

  it.skip('CardContainer component should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })


})