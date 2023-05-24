import React from "react";

const Tabnavigation = ({ filterMenu, catItems }) => {
  return (
    <>
      <div className='container d-flex justify-content-around'>
        {catItems.map((data, ind) => {
          return (
            <button
              type='button'
              key={ind}
              className='btn btn-primary'
              onClick={() => filterMenu(data)}
            >
              {data}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Tabnavigation;
