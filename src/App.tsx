/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { SEO } from './components/SEO';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { FAQ } from './pages/FAQ';

// Placeholders for other pages
const NotFound = () => (
  <div className="p-8 text-center min-h-[50vh] pt-32">
    <SEO title="Page Not Found" description="The page you are looking for does not exist." />
    <h1 className="text-4xl font-bold mb-4">404</h1>
    <p>Page Not Found</p>
  </div>
);

const Legal = ({ title }: { title: string }) => (
  <div className="p-8 text-center min-h-[50vh] pt-32 max-w-3xl mx-auto">
    <SEO title={title} description={`Read the ${title} of Brothers TV Repair Services.`} />
    <h1 className="text-3xl font-bold mb-8">{title}</h1>
    <p className="text-gray-600 text-left">This page is under construction. Please contact us for more information regarding our policies.</p>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Brothers TV Repair Services" defaultTitle="Brothers TV Repair Services - Best TV Repair in Delhi NCR">
        <meta name="description" content="Get expert, fast, and reliable TV repair services at your doorstep in Delhi NCR. All brands and models." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Brothers TV Repair Services" />
        <meta property="og:description" content="Get expert, fast, and reliable TV repair services at your doorstep in Delhi NCR. All brands and models." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<Legal title="Privacy Policy" />} />
            <Route path="/terms" element={<Legal title="Terms & Conditions" />} />
            <Route path="/refund-policy" element={<Legal title="Refund Policy" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
