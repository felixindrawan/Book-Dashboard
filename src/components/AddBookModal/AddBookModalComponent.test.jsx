import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AddBookModal from "./AddBookModalComponent";

configure({ adapter: new Adapter() });

describe("Add Book Modal Component test", () => {
  const wrapper = shallow(<AddBookModal />);

  describe("Components Test", () => {
    it("Should render correctly", () => {
      expect(wrapper.exists()).toBeTruthy();
    });

    it("Should have input for title", () => {
      const titleInput = wrapper
        .find("input")
        .findWhere((n) => n.prop("name") === "title")
        .exists();

      expect(titleInput).toBeTruthy();
    });

    it("Should have select for country", () => {
      const selectInput = wrapper
        .find("select")
        .findWhere((n) => n.prop("name") === "pubCountry")
        .exists();

      expect(selectInput).toBeTruthy();
    });

    it("Should have button for submit", () => {
      const buttonSubmit = wrapper.find(".button-red");

      expect(buttonSubmit.exist()).toBeTruthy();

      expect(buttonSubmit.text().to.be.eql("Submit")).toBeTruthy();
    });

    it("Should have button to close modal", () => {
        const buttonExit = wrapper.find(".close-button");
        expect(buttonExit.exist()).toBeTruthy();
  
        expect(buttonExit.text().to.be.eql("X")).toBeTruthy();
      });
  });
});
