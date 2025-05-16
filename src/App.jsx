import React, { useState } from 'react';
import SplashScreen from './pages/SplashScreen';
import UserForm from './pages/UserForm';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {showSplash ? <SplashScreen /> : <UserForm />}
    </div>
  );
}

export default App;
