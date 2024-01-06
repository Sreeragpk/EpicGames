import React from "react";

function Footer() {
  return (
    <div className='text-white'>
    <div className='max-w-[1145px] w-full mx-auto text-center flex flex-col justify-center gap-2'>
        <h1 className="text-[42px] leading-[48px] font-extralight ">Our Contribution</h1>
        <p className="text-[18px] leading-[27px] font-normal">
          Our core offering extends beyond mere profit generation; we emphasize
          the growth and active involvement of our user community. Collaborating
          with us represents an investment, rather than a mere expenditure. Our
          dedication to providing distinctive digital interactions guarantees
          unparalleled benefits for our clientele.
        </p>
      </div>
      <div className="mx-auto flex gap-8 justify-center max-w-[886px] mt-[108px]">
        <div className="flex flex-col justify-center text-center gap-[41px]">
          <h1 className="text-[80px] font-extralight">5M</h1>
          <p className="text-center text-[19px] font-light">
            Daily User <br /> Engagements.
          </p>
        </div>
        <div className=" flex flex-col justify-center text-center gap-[41px]">
          <h1 className="text-[80px] font-extralight">$500K</h1>
          <p className="text-center text-[19px] font-light">
            Revenue Surge for an <br />Platform
          </p>
        </div>
        <div className=" flex flex-col justify-center text-center gap-[41px]">
          <h1 className="text-[80px] font-extralight">$10X</h1>
          <p className="text-center text-[19px] font-light">
            ROAS on all our <br />marketing campaigns
          </p>
        </div>
      </div>
      <div className="text-center max-w-[938px] mx-auto mt-[280px]">
        <h1 className="text-[45px] font-light">Interested in delving deeper into the project?</h1>
        <p className="mt-[50px] mb-[85px] max-w-[864px]">If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at <strong>hello@abc.com</strong> or give us a call at <strong> +91 480 20802730.</strong></p>
        <div className=" mx-auto flex gap-[36px] w-[fit-content] flex-wrap">
            <button className="w-[373px] border-white border py-4 mx-auto">Ring us on Skype</button>
            <button className="w-[373px] bg-white text-black py-4 mx-auto">Contact Us</button>
        </div>
      </div>
        <p className="w-[fit-content] mx-auto mt-[310px] mb-[57px] font-light">© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
