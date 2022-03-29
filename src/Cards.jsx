import React from "react";
import { NavLink } from "react-router-dom";
import sameImg from './images/about_dis.jpg'

const Cards = () => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={sameImg} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>


        {/* Do not use this way in React. Always use map method with an API to fetch the multiple data. Currently we don't have an API that's why we are using 6 cards this way  */}


      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={sameImg} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>


      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={sameImg} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>


      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={sameImg} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>


      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={sameImg} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>


      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={sameImg} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>


  {/* Do not use this way in React. Always use map method with an API to fetch the multiple data. Currently we don't have an API that's why we are using 6 cards this way  */}



    </>
  );
};

export default Cards;
