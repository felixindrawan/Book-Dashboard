import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import BookCard from "./BookCardComponent";
import BookDetails from "../BookDetails/BookDetailsComponent"

configure({ adapter: new Adapter() });

describe("Book Card Component test", () => {
  const wrapper = shallow(<BookCard />);

  describe("Components Test", () => {
    it("Should render correctly", () => {
      expect(wrapper.exists()).toBeTruthy();
    });

    it("Should render Book Details", () => {
        const findBookDetails = wrapper.find(BookDetails);

        expect(findBookDetails.exists()).toBeTruthy();  
    });
  });
});
