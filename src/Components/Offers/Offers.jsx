import React from "react";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import "./offers.scss";

import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
const Data = [
  {
    id: 1,
    imgSrc: img6,
    destTitle: "Machu Picchu",
    location: "Peru",
    price: "$7,452",
  },
  {
    id: 2,
    imgSrc: img7,
    destTitle: "Guanajuato",
    location: "China",
    price: "$2,452",
  },
];
const Offers = () => {
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            From hisltorical cities to natural spectaculars, come see teh best
            of the world
          </p>
        </div>
        <div className="mainContent grid">
          {Data.map((el) => {
            return (
              <div className="singleOffer">
                <div className="destImage">
                  <img src={el.imgSrc} alt="img"></img>
                  <span className="discount">30% Off</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>{el.price}</h4>
                    <span className="status">For Rent</span>
                  </div>

                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <small>2 Beds</small>
                    </div>
                    <div className="singleAmenity flex">
                      <small>1 Bath</small>
                    </div>
                    <div className="singleAmenity flex">
                      <small>Wi-Fi </small>
                    </div>
                    <div className="singleAmenity flex">
                      <small>Shuttle</small>
                    </div>
                  </div>

                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>450 Vine #310, {el.location}</small>
                  </div>

                  <button className="btn flex">
                    View Details
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
