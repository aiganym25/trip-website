import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Blog = () => {
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Our best Blog?</h2>
          <p>An insight to the increadible experience in the world!</p>
        </div>

        <div className="mainContainer grid">
          <div className="singlePost grid">
            <div className="imgDiv">
              <img src="" alt=""></img>
            </div>

            <div className="postDetails">
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus veritatis, odio exercitationem dolorem harum dolorum
                est, quasi quia nesciunt similique tenetur cupiditate suscipit
                placeat fugit corporis deserunt explicabo minus sunt!
              </p>
            </div>

            <a href="#" className="flex">
              <BsArrowRightShort className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
