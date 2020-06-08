import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";

import Header from "../Header/HeaderComponent";
import BooksData from "../Books/BooksComponent";

import configureStore from "../../store";
import MainComponent from "./MainComponent";

const store = configureStore();
configure({ adapter: new Adapter() });

describe("Main Component test", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );

  describe("Components Test", () => {
    it("Should render correctly", () => {
      expect(wrapper.exists()).toBeTruthy();
    });
    
    it("Should render header correctly", () => {
      const findHeader = wrapper.find(Header);

      expect(findHeader.exists()).toBeTruthy();
    });

    it("Should render Books Data correctly", () => {
      const findBooksData = wrapper.find(BooksData);

      expect(findBooksData.exists()).toBeTruthy();
    });
  });
});
