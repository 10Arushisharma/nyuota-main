"use client";

import React from "react";
import "./Card.scss";

const Cards = () => {
  const handleNavigation = (category) => {
    console.log(`Navigating to: ${category}`);
    // Replace with your actual navigation logic
  };

  const cardCategories = [
    { id: 1, title: "Wedding Invitations", route: "/wedding-invitations" },
    { id: 2, title: "Party Invitations", route: "/party-invitations" },
    { id: 3, title: "Wedding Itinerary", route: "/wedding-itinerary" },
    { id: 4, title: "Tags & Stickers", route: "/tags-stickers" },
    { id: 5, title: "Pooja Invitations", route: "/pooja-invitations" },
    { id: 6, title: "Ceremony Invitations", route: "/ceremony-invitations" },
    { id: 7, title: "Wedding Calendars", route: "/wedding-calendars" },
    { id: 8, title: "Wedding Games", route: "/wedding-games" },
  ];

  const handleShopNow = () => {
    console.log("Shop Now clicked - Navigate to shop page");
  };

  return (
    <div className="cards-container">
      <div className="cards-wrapper">
        {/* Top Row */}
        <div className="cards-grid">
          {cardCategories.slice(0, 4).map((card) => (
            <div
              key={card.id}
              onClick={() => handleNavigation(card.title)}
              className="card-item"
            >
              <div className="card-shape" />
              <h3 className="card-title">{card.title}</h3>
            </div>
          ))}
        </div>

        {/* SHOP NOW BUTTON */}
        <div className="shop-now-wrapper">
          <button className="shop-now-button" onClick={handleShopNow}>
            <span>SHOP NOW</span>
          </button>
        </div>

        {/* Bottom Row */}
        <div className="cards-grid">
          {cardCategories.slice(4, 8).map((card) => (
            <div
              key={card.id}
              onClick={() => handleNavigation(card.title)}
              className="card-item"
            >
              <div className="card-shape" />
              <h3 className="card-title">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;