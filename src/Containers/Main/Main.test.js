import React from "react";
import Main from "./Main";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});
describe("Main", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Main />
      </Provider>
    );
  });

  it("Main component should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
