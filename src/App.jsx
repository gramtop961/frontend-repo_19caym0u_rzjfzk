import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeSnippets from './components/CodeSnippets';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black font-['Inter','Geist','Inter_var','system-ui'] text-white">
      <Hero />
      <Features />
      <CodeSnippets />
      <Footer />
    </div>
  );
}

export default App;
