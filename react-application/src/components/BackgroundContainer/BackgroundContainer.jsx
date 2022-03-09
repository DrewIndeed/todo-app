import React from 'react';
import './backgroundContainer.css';
import { Images } from '../../assets/index';

const BackgroundContainer = () => {
  return (
    <div className="bg-blue-500 w-full h-screen flex flex-col">
      <div
        style={{ backgroundImage: `url(${Images.desktopDark})` }}
        className="top-background"
      ></div>
      <div className="bot-background bg-green-500 flex-1"></div>
    </div>
  );
};

export default BackgroundContainer;
