import { AboutUsSection } from './sections/AboutUsSection';
import { ContactUsSection } from './sections/ContactUsSection';
import { GallerySection } from './sections/GallerySection';
import { HeroSection } from './sections/HeroSection';
import { InfoSection } from './sections/InfoSection';
import { ItemsSection } from './sections/ItemsSection';

export const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <ItemsSection />
      <InfoSection />
      <ContactUsSection />
      <GallerySection />
    </main>
  );
};
