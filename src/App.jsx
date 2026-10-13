import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import Recognition from './components/Recognition';
import HackIndiaLeadership from './components/HackIndiaLeadership';
import CreativeConcepts from './components/CreativeConcepts';
import SkillsTools from './components/SkillsTools';
import AboutCertifications from './components/AboutCertifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="portfolio-app">
      {/* Floating Single Capsule Liquid Glass Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* 1. Hero Section with Creative Showreel Player */}
        <Hero />

        {/* 2. Selected Work — 4 Projects in Exact Requested Order */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. Achievements & Recognition (Immediately after the four projects) */}
        <Recognition />

        {/* 4. Hackathon Achievement & Team Leadership (Immediately after public recognition) */}
        <HackIndiaLeadership />

        {/* 5. Creative Concepts (Poster, Carousel, Workflow) */}
        <CreativeConcepts />

        {/* 6. Skills & Tools Matrix */}
        <SkillsTools />

        {/* 7. About Me & Academic Credentials */}
        <AboutCertifications />

        {/* 8. Institutional Distinctions & Milestones */}
        <Achievements />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
