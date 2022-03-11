import React, { useState } from 'react';
import BackgroundContainer from './components/BackgroundContainer/BackgroundContainer';
import MainContainer from './components/MainContainer/MainContainer';

const App = () => {
  const [isThemeChanged, setIsThemeChanged] = useState(false);

  return (
    <div className="app">
      <BackgroundContainer isThemeChanged={isThemeChanged} />
      <MainContainer setIsThemeChanged={setIsThemeChanged} />
    </div>
  );
};

export default App;
