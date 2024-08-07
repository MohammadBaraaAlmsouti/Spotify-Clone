import React from 'react';
import Navbar from './Navbar';
import { albumsData } from '../assets/assets';
import { songsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl ">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => {
            return (
              <AlbumItem
                key={index}
                id={item.id}
                image={item.image}
                desc={item.desc}
                name={item.name}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl ">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => {
            return (
              <SongItem
                key={index}
                id={item.id}
                image={item.image}
                desc={item.desc}
                name={item.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
