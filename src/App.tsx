import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import TopNav from './components/TopNav';
import HeroStage from './components/HeroStage';
import ListenStage from './components/ListenStage';
import ThinkStage from './components/ThinkStage';
import SpeakStage from './components/SpeakStage';
import MaterialSection from './components/MaterialSection';
import SpecsSection from './components/SpecsSection';
import WaitlistSection from './components/WaitlistSection';
import FooterStage from './components/FooterStage';
import StickyReserveBar from './components/StickyReserveBar';
import FilmModal from './components/FilmModal';
import ErrorBoundary from './components/ErrorBoundary';
import { ScrollStageProvider } from './hooks/useScrollStage';
import { ProductConfigProvider } from './hooks/useProductConfig';

export default function App() {
  const [filmOpen, setFilmOpen] = useState(false);

  return (
    <ErrorBoundary>
      <ProductConfigProvider>
        <ScrollStageProvider>
          <div className="relative min-h-screen overflow-x-hidden bg-[#070708] text-[#F4F5F7]">
            <TopNav />
            <main>
              <HeroStage onWatchFilm={() => setFilmOpen(true)} />
              <ListenStage />
              <ThinkStage />
              <SpeakStage />
              <MaterialSection />
              <SpecsSection />
              <WaitlistSection />
              <FooterStage />
            </main>
            <StickyReserveBar />
            <FilmModal open={filmOpen} onOpenChange={setFilmOpen} />
            <Toaster
              position="top-center"
              toastOptions={{
                style: { background: '#0F1012', color: '#F4F5F7', border: '1px solid rgba(255,255,255,0.1)' },
              }}
            />
          </div>
        </ScrollStageProvider>
      </ProductConfigProvider>
    </ErrorBoundary>
  );
}
