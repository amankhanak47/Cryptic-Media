import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
var showsummary;
const Home = () => {
  const navigate = useNavigate();
  const [shows, setShows] = useState([]);
  const fetchapi = async () => {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=all`);

    const data = await response.json();
    setShows(data);
  };
  useEffect(() => {
    fetchapi();
  }, []);

  const handlenextpage = (show) => {
    console.log(show);
  };
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home-shows">
          {shows &&
            shows.map((show, i) => (
              <div
                className="homebox-show"
                key={i}
                onClick={() => {
                  showsummary = show;
                  navigate("/summary");
                }}
              >
                <img src={show.show.image.medium} alt="" />
                <p>{show.show.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
export { showsummary };
