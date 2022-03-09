import React from 'react';
import './mainContainer.css';
import { Images } from '../../assets/index';
const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="card-container">
        {/* main title */}
        <div className="card-image">
          <h2>TODO</h2>
          <div className="image cursor-pointer">
            <img src={Images.sunIcon} alt="A sun icon" />
          </div>
        </div>

        {/* new item input and items list */}
        <div className="items-container flex flex-col items-center space-y-6 flex-1">
          {/* input to create */}
          <div className="items-container__create w-full flex rounded-md overflow-hidden">
            {/* complete circle container */}
            <div className="w-16 h-14 flex items-center justify-center">
              <div className="completed-circle rounded-full w-6 h-6 cursor-pointer"></div>
            </div>

            {/* input for new task */}
            <div className="items-container__create-content flex-1">
              <input
                className="w-full h-full outline-none"
                placeholder="What's on your mind?"
                type="text"
              />
            </div>
          </div>

          {/* items list */}
          <div className="items-container__list shadow-lg w-full flex flex-1 rounded-md"></div>
        </div>

        {/* drag and drop msg */}
        <div className="bg-transparent flex items-center justify-center py-12">
          <h3 className="drag-drop-msg text-xs font-bold opacity-50">
            Drag and drop to reorder list
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
