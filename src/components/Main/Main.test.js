import React from 'react';
import Main from './Main';
import { shallow } from 'enzyme'

describe('Main', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (<Main/>)
  })

  it('Main component should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })


})