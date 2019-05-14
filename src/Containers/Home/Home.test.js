import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
    <Provider store={store}>
      <Home/>
    </Provider>
    )
  })

  it('Home component should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })


})