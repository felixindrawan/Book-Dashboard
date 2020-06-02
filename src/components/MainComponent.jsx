import React, { useState, useEffect } from "react";

import Header from "./HeaderComponent";
import BooksData from "./BooksComponent";

import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../actions/every_action";

function MainComponent() {

  // -------------------------*****-------------------------
  // Fetching Data
  const [dataList, setDataList] = useState([]);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(data));
  }, []);

  useEffect(() => {
    setDataList(data.data);
  })

  return (
    <div>
      <Header text="Book Store" />

      <BooksData data={dataList}/>
    </div>
  );
}

export default MainComponent;
