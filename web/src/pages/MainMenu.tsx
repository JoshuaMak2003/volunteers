import Header from '@components/Header';
import Footer from '../components/Footer';
import '../styles/pageStyles/MainMenu.css';
import MainGallery from '@components/MainGallery';
import { sponsors } from '../data/SponsorList.json'; // Import events data from JSON file to display on main page gallery, THIS MAY CHANGE IN THE FUTURE
import Sponsors from '@components/Sponsors';
import EventHighlights from '@components/EventHighlights';
import { eventHighlights } from '../data/EventHighlights.json';
import OurAchievements from '@components/OurAchievements';
import OurCommunity from '@components/OurCommunity';
import AuthenticationContextProvider from '../context/AuthenticationContextProvider';
// import ShowCaseUserAnnouncements from '@components/ShowCaseUserAnnouncements';
import LoginModalContextProvider from '../context/LoginModalContextProvider';
import LoginModal from '@components/LoginModal';
import { useEffect } from 'react';
import axios from 'axios';

interface MainGalleryProps {
  title: string,  
  image: string 
}

function MainMenu() {
  let gallery: MainGalleryProps[] = [];
  let achievements = eventHighlights;
  let community = eventHighlights;

  useEffect(() => {
    // Fetch gallery data
    axios.get('/api/homepage/gallery')
      .then((res) => {
        gallery = res.data;
        console.log(gallery);
      });

    // Fetch event highlights data
    // fetch('/api/getEventHighlights')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    // Fetch sponsor data
    // fetch('/api/getSponsors')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }
  , []);

  return (
    <div className="primary-background">
      {/* <ShowCaseUserAnnouncements/> */}
      {/* <p className='font-serif text-font-primary text-lg px-h-md py-v-md'>font-serif for poppins,  font-lora for lora,  sans for Work Sans ::font-serif text-font-primary text-lg px-h-md py-v-md::</p> */}
      <AuthenticationContextProvider>
        <LoginModalContextProvider>
          <LoginModal />
          <Header />
          <MainGallery data={gallery} />
          <EventHighlights data={eventHighlights} />
          <OurAchievements data={achievements} />
          <OurCommunity data = {community} />
          <Sponsors data={sponsors}/>
          <Footer />
        </LoginModalContextProvider>
      </AuthenticationContextProvider>
    </div>
  );
}

export default MainMenu;
