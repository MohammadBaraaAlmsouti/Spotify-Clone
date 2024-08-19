import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full flex-col gap-2 p-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate('/')}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create our first playlist</h1>
          <p className="font-light">Its's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white rounded-full text-[15px] text-black mt-4">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light">we'll keep you on new update</p>
          <button className="px-4 py-1.5 bg-white rounded-full text-[15px] text-black mt-4">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
