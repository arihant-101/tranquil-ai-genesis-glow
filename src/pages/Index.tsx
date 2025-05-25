
import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - you can adjust this duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds for the full animation

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Welcome to Tranquil AI
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Your journey to mental wellness starts here. Experience personalized AI-powered mental health support.
        </p>
      </div>
    </div>
  );
};

export default Index;
