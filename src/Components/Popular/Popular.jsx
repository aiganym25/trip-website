import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import "./popular.scss";

import img from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
  },
  {
    id: 2,
    imgSrc: img3,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
  },
  {
    id: 3,
    imgSrc: img4,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
  },
];
const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From hsitorical cities to natural specteculars, come see the best
              of the world!
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map((el) => {
            return (
              <div className="singleDestination">
                <div className="destImage">
                  <img src={el.imgSrc} alt="Image title" />
                  <div className="overlayInfo">
                    <h3>{el.destTitle}</h3>
                    <p>{el.location}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{el.id}</div>
                  <div className="destText flex">
                    <h6>{el.location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
