import React from "react";

// components
import PrimaryLink from "../components/ui/PrimaryLink";
import SecondaryLink from "../components/ui/SecondaryLink";

const Landing_Page = () => {
  return (
    <>
      <section className='h-[800px] w-full relative'>
        <div className="bg-[url('/imgs/phoenix_fire.jpg')] bg-cover bg-no-repeat bg-center h-full w-full brightness-[45%]"></div>
        <div className='text-white absolute h-full w-full top-0 flex flex-col justify-center p-10 gap-4'>
          <h1 className='w-[600px] text-4xl drop-shadow-md'>
            Rise from the ashes of traditional finance with our crypto social
            media platform.
          </h1>
          <div className='flex gap-4'>
            <PrimaryLink url={"/register"} title={"Sign Up"} />
            <SecondaryLink url={"/phoenix_vision"} title={"Phoenix Vision"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing_Page;
