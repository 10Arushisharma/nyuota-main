"use client";

import React from "react";
import { Instagram } from "lucide-react";
import "./OurTrending.scss";

const OurTrending = () => {
  const trendingItems = [
    { id: 1, title: "Trending Item 1" },
    { id: 2, title: "Trending Item 2" },
    { id: 3, title: "Trending Item 3" },
    { id: 4, title: "Trending Item 4" },
    { id: 5, title: "Trending Item 5" },
    { id: 6, title: "Trending Item 6" },
  ];

  const handleCardClick = (itemId) => {
    console.log(`Navigating to trending item ${itemId}`);
  };

  const handleButtonClick = (type) => {
    console.log(`Navigating to ${type}`);
  };

  return (
    <div className="ourTrending">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h2>What's Trending !</h2>
          <p>Find out what's making waves in the event world</p>
        </div>

        {/* Trending Grid */}
        <div className="trending-grid">
          {trendingItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className="trending-card"
            >
              <div className="img-placeholder"></div>
            </div>
          ))}
        </div>

        {/* Instagram Follow */}
        <div className="follow-section">
          <h3>Follow us on</h3>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-button"
          >
            <div className="icon-bg">
              <Instagram className="icon" />
            </div>
          </a>
        </div>

        {/* Bottom Banner */}
        <div className="bottom-banner">
          <div className="banner-content">
            <div className="banner-side">
              <p>Wedding & Events</p>
              <button onClick={() => handleButtonClick("News E-Paper")}>News E-Paper</button>
            </div>

            <div className="banner-center">
              <h3>Surprise your Guests !</h3>
              <p className="tagline">'Creative Impression with story'</p>
              <p className="highlight">SHARE THE MAGIC</p>
            </div>

            <div className="banner-side">
              <p>Wedding & Events</p>
              <button onClick={() => handleButtonClick("E-Magazine")}>E-Magazine</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTrending;
