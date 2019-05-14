import React from 'react';
import UserSignin from './UserSignin';
import { shallow } from 'enzyme';

describe('UserSignin', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
        <UserSignin />
    )
  })

  it('UserSignin component should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })


})