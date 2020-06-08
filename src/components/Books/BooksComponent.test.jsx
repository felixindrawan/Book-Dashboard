import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import BookData from "./BooksComponent";
import BookCard from "../BookCard/BookCardComponent";
import AddBookModal from "../AddBookModal/AddBookModalComponent";

configure({ adapter: new Adapter() });

describe("Book Data Component test", () => {
  const wrapper = shallow(<BookData />);

  describe("Components Test", () => {
    it("Should render correctly", () => {
      expect(wrapper.exists()).toBeTruthy();
    });

    it("Should render Book Card", () => {
        const findBooKCard = wrapper.find(BookCard);

        expect(findBooKCard.exists()).toBeTruthy();  
    });

    it("Should render the Book Modal", () => {
        const findBooKModal = wrapper.find(AddBookModal);

        expect(AddBookModal.exists()).toBeTruthy();  
    });
  });
});
