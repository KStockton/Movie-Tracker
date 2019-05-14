import React from 'react';
import Nav from './Nav';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Provider store={store}>
    <Nav/>
      </Provider>
    )
  })

  it('Nav component should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })


})