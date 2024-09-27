import React from "react";

const PhoenixVision_Page = () => {
  return (
    <section className="flex flex-col gap-4 mt-5 px-4">
      <h1>Project Phoenix</h1>
      <div className="flex flex-col gap-4 md:flex-row justify-center items-center">
        <img
          src="/imgs/car_back_001.jpg"
          alt=""
          className="w-full h-auto max-w-md md:order-2"
        />
        <p className="text-center">
          Project Phoenix is a place where users can share thoughts and ideas.
        </p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-center items-center">
        <img
          src="/imgs/car_front_001.jpg"
          alt=""
          className="w-full h-auto max-w-md"
        />
        <p className="text-center">
          This platform allows users to post thoughts and users can then like or
          dislike the post. The way social media platforms were truly meant to
          be.
        </p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-center items-center">
        <img
          src="/imgs/car_front_003.jpg"
          alt=""
          className="w-full h-auto max-w-md md:order-2"
        />
        <p className="text-center">
          I believe in the true power of people and the power of the internet.
        </p>
      </div>
    </section>
  );
};

export default PhoenixVision_Page;
