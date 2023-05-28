"use client"

import { useState, useEffect } from 'react';

const quotes = [
  "Sunset: Keindahan yang melambangkan akhir dan awal.",
  "Warna-warna senja, pesan diam tentang keindahan.",
  "Saat senja menyapa, dunia berpadu dalam keajaiban."
];

const QuoteDisplay = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(quotes[currentQuoteIndex]);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      setActiveDotIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentQuote(quotes[currentQuoteIndex]);
  }, [currentQuoteIndex]);

  return (
    <div className="flex items-center justify-center h-fit flex-col gap-4">
      <div className="flex space-x-2">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === activeDotIndex ? 'bg-white opacity-100' : 'bg-white opacity-40'
            }`}
            style={{ marginTop: '8px' }}
          />
        ))}
      </div>
      <p>{currentQuote}</p>
    </div>
  );
};

export default QuoteDisplay;
