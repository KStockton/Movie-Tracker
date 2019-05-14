import React from 'react';
import UserSignin from './UserSignin';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('UserSignin', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Provider store={store}>
        <UserSignin/>
      </Provider>
    )
  })

  it('UserSignin component should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })


})