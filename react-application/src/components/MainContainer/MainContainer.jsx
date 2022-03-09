import React from 'react';
import './mainContainer.css'
import {Images} from '../../assets/index'
const MainContainer = () => {
  return <div className ="main-container">
      <div className="card-container">
          <div className="card-image">
            <h2>TODO</h2>
            <div className="image">
              <img src={Images.sunIcon} alt="A sun icon" />
              </div>
          </div>
        </div>
    </div>;
};

export default MainContainer;
