import React, { useState } from "react";
import Tabnavigation from "./Tabnavigation";
import Gallerybody from "./Gallerybody";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./data";

const allCatValue = [
  ...new Set(
    Main.map((currEle) => {
      return currEle.category;
    })
  ),
  "All",
];

const Galleryfilter = () => {
  const [item, setitem] = useState(Main);
  const [catItems, setCatItems] = useState(allCatValue);
  const filterMenu = (category) => {
    if (category == "All") {
      setitem(Main);
      return;
    }
    const updatedItems = Main.filter((curelem) => {
      return curelem.category === category;
    });
    setitem(updatedItems);
  };
  return (
    <>
      <h2 className='text-center'>Dynamic Gallary Filter</h2>
      <hr />
      <Tabnavigation filterMenu={filterMenu} catItems={catItems} />
      <Gallerybody items={item} />
    </>
  );
};

export default Galleryfilter;
