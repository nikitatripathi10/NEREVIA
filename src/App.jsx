import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import PageLoader from './components/ui/PageLoader.jsx';

// Route-level code splitting keeps the initial bundle lean.
const Home = lazy(() => import('./pages/Home.jsx'));
const DigitalTwin = lazy(() => import('./pages/DigitalTwin.jsx'));
const AIIntelligence = lazy(() => import('./pages/AIIntelligence.jsx'));
const Simulator = lazy(() => import('./pages/Simulator.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digital-twin" element={<DigitalTwin />} />
          <Route path="/intelligence" element={<AIIntelligence />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
