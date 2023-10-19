import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../api";
import { setList } from "../reducers/app";
import { createApi } from "unsplash-js";
import { Image, ListItem, UnorderedList } from "@chakra-ui/react";

const api = createApi({
  accessKey: '',
  fetch: fetchPhotos
})

const List = () => {
  const [scrollNumber, setScrollNumber] = useState(1);
  const {list} = useSelector(state => state.app);
  const disptach = useDispatch();

  useEffect(
    async () => {     const data = await fetchPhotos({
      page: scrollNumber,
      perPage: 30
    });
    disptach(setList(data.images)); }, []
  );

  const onFetchItems = async (event) => {
    const currHeight = document.body.scrollHeight;
    const currentScroll = window.scrollY + window.innerHeight;
    if (currentScroll - 100 <= currHeight) {
      setScrollNumber((prev) => ++prev);
      const data = await fetchPhotos({
        page: scrollNumber,
        perPage: 30
      });
      disptach(setList(data.images));
    }

  }

  return (
    <div style={{ minHeight: "90vh", width: "100%" }}  className="grid grid-cols-3 list-none items-center" onWheel={onFetchItems}>
    {list.map(element => <span className="flex flex-col items-center"><Image key={element.id} src={element.urls.thumb}  alt={element.alt_description} /> <span>{element.description}</span></span> )}
  </div>
  );
};

export default List;
