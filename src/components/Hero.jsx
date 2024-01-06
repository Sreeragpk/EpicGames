import React from 'react';
import fortnite from '../assets/fortnite-pictures-b5kfcchwazwiz3cs1.png'
import { IoMdClose } from "react-icons/io";
import './Hero.css'
const Hero = () => {
  return (
    <div className='text-white'>
        <div className='w-[fit-content] ml-auto mr-[40px] mt-[40px] close-btn cursor-pointer'>
        <IoMdClose size={47} />
        </div>
      <div className=' mt-[20px] w-full h-screen text-center flex flex-col  '>
        <p className='max-w-[1375px] text-[#FFFF]  mx-auto p-2 text-3xl font-extralight'>
        Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.
        </p>
        <img className='mx-auto w-[1415px] h-[500px] items-center' src={fortnite} alt="" />
        <div className='flex justify-center items-center'>
          <p className='max-w-[1231px] mx-auto text-[18px] font-normal py-4'>
          Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
          </p>
        </div>
        <button className='bg-[#FFFF] w-[416px] font-normal my-6 mx-auto py-3 text-black'>Visit Website</button>
      </div>
    </div>
  );
};

export default Hero;