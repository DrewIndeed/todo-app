import React from 'react';
import './backgroundContainer.css';
import { Images } from '../../assets/index';

const BackgroundContainer = ({ isThemeChanged }) => {
  const lightBgStyle = 'var(--very-light-gray)';
  const darkBgStyle = 'var(--very-dark-grayish-blue)';

  return (
    <div className="w-full h-screen flex flex-col">
      <div
        style={{
          backgroundImage: isThemeChanged
            ? `url(${Images.desktopDark})`
            : `url(${Images.desktopLight})`,
        }}
        className="top-background"
      />
      <div
        style={{
          backgroundColor: isThemeChanged ? darkBgStyle : lightBgStyle,
        }}
        className="bot-background flex-1"
      />
    </div>
  );
};

export default BackgroundContainer;
