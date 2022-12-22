import React from "react";
import volunteer from "../../../assets/volunteer.png";

const TeamWork = () => {
  return (
    <div className="hero bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <div className="sm:w-1/2 lg:w-1/2">
        <img
          src={volunteer}
          className="rounded-lg shadow-2xl"
          alt=""
        />
        </div>
        <div className="sm:w-1/2 lg:w-1/2">
          <h1 className="text-5xl font-bold">
            We are nonprofit team and work worldwide
          </h1>
          <p className="py-6">
            Their multiply doesn't behold shall appear living heaven second roo
            lights. Itself hath thing for won't herb forth gathered good bear
            fowl kind give fly form winged for reason Land their given the <br /> <br />
            seasons herb lights fowl beast whales it after multiply fifth under
            to it waters waters created heaven very fill agenc to. Dry creepeth
            subdue them kind night behold rule stars him grass waters our
            without
          </p>
          <button className="btn btn-outline btn-success">learn more</button>
        </div>
      </div>
    </div>
  );
};

export default TeamWork;
