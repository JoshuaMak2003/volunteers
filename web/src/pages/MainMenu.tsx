import Header from '@components/Header';
import Footer from '../components/Footer';
import '../styles/pageStyles/MainMenu.css';
import MainGallery from '@components/MainGallery';
import { events } from '../data/MainGalleryEvents.json'; // Import events data from JSON file to display on main page gallery, THIS MAY CHANGE IN THE FUTURE
import { sponsors } from '../data/SponsorList.json'; // Import events data from JSON file to display on main page gallery, THIS MAY CHANGE IN THE FUTURE
import Sponsors from '@components/Sponsors';
import EventHighlights from '@components/EventHighlights';
import { eventHighlights } from '../data/EventHighlights.json';
import OurAchievements from '@components/OurAchievements';
import OurCommunity from '@components/OurCommunity';
function MainMenu() {

  return (
    <div className="primary-background">
      <p className='font-lora text-lg padding-v-lg'>font-serif for poppins,  font-lora for lora,  sans for Work Sans</p>
      <Header />
      <MainGallery data={events} />
      <EventHighlights data={eventHighlights} />
      <OurAchievements/>
      <OurCommunity/>
      <Sponsors data={sponsors}/>
      <Footer />
    </div>
  );
}

export default MainMenu;
