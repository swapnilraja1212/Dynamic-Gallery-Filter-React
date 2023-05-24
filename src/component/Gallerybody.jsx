import React, { useState } from "react";

const Gallerybody = ({ items }) => {
  return (
    <>
      <div className='container'>
        <div className='row my-5'>
          {items.map((data, ind) => {
            return (
              <div
                className='col-md-4 shadow p-3 mb-5 bg-white rounded'
                key={ind}
              >
                <div className='row'>
                  <div className='col-md-4'>
                    <img src={data.imgsrc} className='img-fluid' />
                  </div>

                  <div className='col-md-8'>
                    <h4>{data.name}</h4>
                    <p>{data.description}</p>
                    <div className='d-flex justify-content-between'>
                      <p>{data.price}</p>
                      <button type='button' className='btn btn-primary btn-sm'>
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallerybody;
