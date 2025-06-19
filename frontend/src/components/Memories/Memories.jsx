// Memories.jsx
"use client";

import React from "react";
import { Play } from "lucide-react";
import "./Memories.scss";

const Memories = () => {
  const memoryCards = [
    {
      id: 1,
      title: "Wedding Memories",
      videoUrl: "/placeholder-video-1.mp4",
    },
    {
      id: 2,
      title: "Event Highlights",
      videoUrl: "/placeholder-video-2.mp4",
    },
    {
      id: 3,
      title: "Special Moments",
      videoUrl: "/placeholder-video-3.mp4",
    },
  ];

  const handlePlayVideo = (cardId) => {
    console.log(`Playing video for card ${cardId}`);
  };

  const handleShopNow = (cardId) => {
    console.log(`Shop Now clicked for card ${cardId}`);
  };

  return (
    <div className="memories-section">
      <div className="memories-wrapper">
        <div className="memories-header">
          <h1>
            Save, Share, Memories - Let Every Memory Shine Forever
          </h1>
          <p>
            Timeless Moments - Endless Memories "Make Every Moment Memorable with Nyouta"
          </p>
        </div>

        <div className="memories-grid">
          {memoryCards.map((card) => (
            <div key={card.id} className="memory-card">
              <div
                onClick={() => handlePlayVideo(card.id)}
                className="video-box"
              >
                <div className="play-button">
                  <Play className="play-icon" fill="currentColor" />
                </div>
              </div>

              <button
                onClick={() => handleShopNow(card.id)}
                className="shop-button"
              >
                SHOP NOW
              </button>
            </div>
          ))}
        </div>

        <div className="memories-description">
          <p>
            Every moment deserves to be remembered. With Nyouta's unique personalized gifts, stylish decor, and
            beautifully crafted keepsakes, we turn your memories into timeless treasures. Celebrate your love, joy, and
            milestones with products designed to preserve the essence of every special occasion. Let Nyouta help you
            make memories that will last a lifetime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Memories;