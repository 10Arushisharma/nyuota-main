// WeddingJourney.jsx
"use client";

import React from "react";
import "./WeddingJourney.scss";

const WeddingJourney = () => {
  const plannerCards = [
    { id: 1, title: "Wedding Management Planner", subtitle: "{ Easy to Manage Wedding }", image: "/placeholder.svg?height=80&width=80" },
    { id: 2, title: "Wedding Management Planner", subtitle: "{ Easy to Manage Wedding }", image: "/placeholder.svg?height=80&width=80" },
    { id: 3, title: "Wedding Management Planner", subtitle: "{ Easy to Manage Wedding }", image: "/placeholder.svg?height=80&width=80" },
    { id: 4, title: "Wedding Management Planner", subtitle: "{ Easy to Manage Wedding }", image: "/placeholder.svg?height=80&width=80" },
    { id: 5, title: "Wedding Management Planner", subtitle: "{ Easy to Manage Wedding }", image: "/placeholder.svg?height=80&width=80" },
    { id: 6, title: "Wedding Management Planner", subtitle: "{ Easy to Manage Wedding }", image: "/placeholder.svg?height=80&width=80" },
  ];

  const handleShopNow = (cardId) => {
    console.log(`Shop Now clicked for planner ${cardId}`);
  };

  const handleCardClick = (cardId) => {
    console.log(`Card ${cardId} clicked`);
  };

  return (
    <div className="wedding-journey">
      <div className="wrapper">
        <div className="header">
          <h1>Your wedding journey starts here !</h1>
          <p>The Perfect Planner for your Big Day | Plan your Perfect Day, Step by Step</p>
        </div>
        <div className="card-grid">
          {plannerCards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className="card"
            >
              <div className="card-top">
                <div className="card-image">
                  <img src={card.image} alt="Wedding Planner" />
                </div>
                <div className="card-text">
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                </div>
              </div>
              <div className="card-button">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShopNow(card.id);
                  }}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingJourney;
