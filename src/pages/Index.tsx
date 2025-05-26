
import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import NavigationHeader from '../components/NavigationHeader';
import HeroSection from '../components/HeroSection';
import MoodLoggingSection from '../components/MoodLoggingSection';
import MoodAnalyticsSection from '../components/MoodAnalyticsSection';
import AITherapistSection from '../components/AITherapistSection';
import JournalingSection from '../components/JournalingSection';
import MeditationSection from '../components/MeditationSection';
import SleepMusicSection from '../components/SleepMusicSection';
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
      <NavigationHeader />
      <div className="pt-16"> {/* Add padding-top to account for fixed header */}
        <HeroSection />
        <MoodLoggingSection />
        <MoodAnalyticsSection />
        <AITherapistSection />
        <JournalingSection />
        <MeditationSection />
        <SleepMusicSection />
        <PricingSection tiers={defaultTiers} />
        <DownloadSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
