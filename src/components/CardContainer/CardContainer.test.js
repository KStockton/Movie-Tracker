import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme'

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (<CardContainer/>)
  })

  it('CardContainer component should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })


})