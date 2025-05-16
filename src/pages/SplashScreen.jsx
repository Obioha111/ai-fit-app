import React from 'react';
import logo from '../assets/logo.png'; // Make sure this matches your actual file name

const SplashScreen = () => {
  return (
    <div className="text-center flex flex-col items-center space-y-4">
      <img src={logo} alt="App Logo" className="w-24 h-24 animate-pulse" />
      <h1 className="text-3xl font-bold text-blue-600">AI Fitness & Diet App</h1>
      <p className="text-gray-500 text-sm">Personalized recommendations just for you</p>
    </div>
  );
};

export default SplashScreen;
