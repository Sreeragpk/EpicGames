import React from 'react';
import FirstImg from '../assets/Fortnite_201806301710461.png'
import SecondImg from '../assets/5daa24d7cc4a0a62650c6b281.png'
import ThirdImg from '../assets/maxresdefault1.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 text-[#FFFF]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300'>
              <img className='w-full bg-white' src={FirstImg} alt="/" />
              <p className='text-center text-[19px] font-light'>$Explore large, destructible environments where no two games are ever the same.</p>
          </div>
          <div className='w-full shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300'>
              <img className='w-full bg-white' src={SecondImg} alt="/" />
              <p className='text-center text-[19px] font-light'>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
          </div>
          <div className='w-full shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300'>
              <img className='w-full bg-white' src={ThirdImg} alt="/" />
              <p className='text-center text-[19px] font-light'>Discover even more ways to play across thousands of creator-made game genres</p>
          </div>
      </div>
    </div>
  );
};

export default Cards;