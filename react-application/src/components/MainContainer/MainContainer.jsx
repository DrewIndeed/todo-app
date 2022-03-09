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
          <div className="image">
            <img src={Images.sunIcon} alt="A sun icon" />
          </div>
        </div>

        {/* new item input and items list */}
        <div className="flex-1 bg-orange-600"></div>
        {/* drag and drop msg */}
        <div className="bg-transparent flex items-center justify-center py-12">
          <h3 className="drag-drop-msg text-xs font-bold">
            Drag and drop to reorder list
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
