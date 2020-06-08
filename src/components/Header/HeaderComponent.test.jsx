import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "./HeaderComponent";

configure({ adapter: new Adapter() });

describe("Header Component test", () => {
  const wrapper = shallow(<Header />);

  describe("Components Test", () => {
    it("Should render correctly", () => {
      expect(wrapper.exists()).toBeTruthy();
    });

    it("Should render Book Details", () => {
      const wrapperWithData = shallow(<Header text="test"/>);

      expect(wrapperWithData.find(".page-title").text()).to.be.eql("test");
    });
  });
});
