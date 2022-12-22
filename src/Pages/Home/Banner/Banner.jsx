import React from "react";
import home1 from "../../../assets/home1.jpeg";

const Banner = () => {
  return (
    // <div className="bannerContainer">
    //   <div className=" text-white">
        // <h2 className="sm:text-3xl lg:text-6xl text-center mb-3 text-green-600">GIVE A HAND</h2>
        // <h3 className="sm:text-2xl lg:text-4xl text-center mb-3 font-bold">
        //   TO MAKE THE BETTER WORLD
        // </h3>
        // <p className="text-md lg:text-center opacity-75">
        //   That don't lights. Blessed land spirit creature divide our made two
        //   itself upon you'll dominion waters <br /> man second good you they're divided
        //   upon winged were replenish night
        // </p>
        // <div className="mt-7 text-center">
        // <button className="btn btn-outline btn-warning mr-6">Donate Now</button>
        // <button className="btn btn-outline btn-warning">See Causes</button>
        // </div>
    //   </div>
    // </div>
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${home1})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
          <h2 className="sm:text-3xl lg:text-6xl text-center mb-3 text-green-600">GIVE A HAND</h2>
        <h3 className="sm:text-2xl lg:text-3xl text-center mb-3 font-bold">
          TO MAKE THE BETTER WORLD
        </h3>
          <p className="mb-5">
          That don't lights. Blessed land spirit creature divide our made two itself upon you'll dominion waters.
          </p>
          <div className="mt-7 text-center">
        <button className="btn btn-outline btn-warning mr-6">Donate Now</button>
        <button className="btn btn-outline btn-warning">See Causes</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
