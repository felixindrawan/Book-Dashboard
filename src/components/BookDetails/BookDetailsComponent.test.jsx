import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import BookDetails from "./BookDetailsComponent";

configure({ adapter: new Adapter() });

describe("Book Details Component test", () => {
  const wrapper = shallow(<BookDetails />);

  describe("Components Test", () => {
    it("Should render correctly", () => {
      expect(wrapper.exists()).toBeTruthy();
    });

    it("Should render with data", () => {
      const wrapperWithData = shallow(
        <BookDetails
          isbn="8324043411"
          pageNum="15"
          pubDate="January 8th, 2015"
          pubCountry="Jakarta"
        />
      );
      expect(wrapperWithData.exists()).toBeTruthy();
    });

    it("Should render the right format of date", () => {
      const wrapperWithData = shallow(<BookDetails pubDate="8 January 2015" />);

      const dateInput = wrapperWithData.find("h5").findWhere((n) => n.prop('id') === '8 January 2015');
      expect(dateInput.text()).to.be.eql("January 8th, 2015");
    });
  });
});
