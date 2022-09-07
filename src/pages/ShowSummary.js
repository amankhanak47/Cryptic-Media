import React from "react";
import Navbar from "../components/Navbar";
import { showsummary } from "./Home";
const ShowSummary = () => {
  console.log(showsummary);
  return (
    <div>
      <Navbar />
      <div className="summary">
        <div className="banner">
          <img
            className="showimg"
            src={showsummary.show.image.original}
            alt=""
          />

          <div className="bannerright">
            <div className="br-namerating">
              <p className="sname">{showsummary.show.name}</p>
              {showsummary.show.rating.average && (
                <p className="rating">{showsummary.show.rating.average}</p>
              )}
              {showsummary.show.premiered && (
                <p className="year">
                  {showsummary.show.premiered.split("-")[0]}
                </p>
              )}
            </div>

            <div>
              <p className="genre">{showsummary.show.genres}</p>
              <button className="button">Previous Episode</button>
              <button className="button">Next Episode</button>
            </div>
            <div className="summary-summary">
              <>{showsummary.show.summary.replace(/<[^>]+>/g, "")}</>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSummary;
