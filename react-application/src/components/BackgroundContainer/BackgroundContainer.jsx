import React from 'react';
import './backgroundContainer.css';
import { Images } from '../../assets/index';

const BackgroundContainer = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div
        style={{ backgroundImage: `url(${Images.desktopDark})` }}
        className="top-background"
      />
      <div className="bot-background flex-1" />
    </div>
  );
};

export default BackgroundContainer;
