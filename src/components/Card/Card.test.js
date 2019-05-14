import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Provider store={store}>
         <Card/>
      </Provider>
    )
  })

  it('Card component should match the snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })


})