import React from 'react';
import HeroSection from './HeroSection';
import FoodApp from './FoodApp';
import MenuCard from './MenuCard';
import AboutUs from './AboutUs';
import BrowseMenu from './BrowseMenu';
import Banner from './Banner';
import Review from './Review';
import Articles from './Articles';
import BookForm from './BookForm';
import FollowUs from './FollowUs';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FoodApp />
      <MenuCard />
      <AboutUs />
      <BrowseMenu />
      <Banner />
      <Review />
      <Articles />
      <BookForm />
      <FollowUs />
    </>
  );
};

export default Home;
