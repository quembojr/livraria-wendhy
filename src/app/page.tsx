import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedSection from '@/components/FeaturedSection';
import TheBook from '@/components/TheBook';
import AboutAuthor from '@/components/AboutAuthor';


const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutAuthor />
      <TheBook />
      {/* Outras sections serão adicionadas aqui */}
    </div>
  );
};

export default Home;

