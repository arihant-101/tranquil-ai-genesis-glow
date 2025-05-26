
import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import HeroSection from '../components/HeroSection';
import MoodLoggingSection from '../components/MoodLoggingSection';
import AITherapistSection from '../components/AITherapistSection';
import JournalingSection from '../components/JournalingSection';
import { PricingSection, defaultTiers } from '../components/PricingSection';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading sequence lasts 5 seconds + 1 second fade out
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen">
      <HeroSection />
      <MoodLoggingSection />
      <AITherapistSection />
      <JournalingSection />
      <PricingSection tiers={defaultTiers} />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
