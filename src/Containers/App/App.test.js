import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  })

  it('App component should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
