import React from "react";

// components
import PrimaryLink from "../components/ui/PrimaryLink";
import SecondaryLink from "../components/ui/SecondaryLink";

const Landing_Page = () => {
  return (
    <>
      <section className='h-[800px] w-full relative'>
        <div className="bg-[url('/imgs/landingHero.jpg')] bg-cover bg-no-repeat bg-center h-full w-full brightness-[45%]"></div>
        <div className='text-white absolute h-full w-full top-0 flex flex-col justify-center items-center text-center p-10 gap-4'>
          <h1 className=''>
            Project Phoenix is the ultimate social media platform for car
            enthusiasts, providing a space for users to connect, share, and
            learn about all things related to motorsports.
          </h1>
          <div className='flex gap-4 justify-center'>
            <PrimaryLink url={"/register"} title={"Sign Up"} />
            <SecondaryLink url={"/phoenix_vision"} title={"Phoenix Vision"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing_Page;
