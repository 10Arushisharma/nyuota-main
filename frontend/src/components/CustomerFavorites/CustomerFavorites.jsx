"use client"

import "./CustomerFavorites.scss";

// import "../../CustomersFavorites/CustomersFavorites.scss"
import React from "react"

const CustomersFavorites = () => {
  const favoriteItems = [
    { id: 1, title: "Playing Cards", image: "/placeholder.svg?height=150&width=150" },
    { id: 2, title: "Room Itinerary", image: "/placeholder.svg?height=150&width=150" },
    { id: 3, title: "Passport Invites", image: "/placeholder.svg?height=150&width=150" },
    { id: 4, title: "News paper Invites", image: "/placeholder.svg?height=150&width=150" },
    { id: 5, title: "Mini Calendars", image: "/placeholder.svg?height=150&width=150" },
    { id: 6, title: "Dining Mats", image: "/placeholder.svg?height=150&width=150" },
  ]

  const handleShopNow = (itemTitle) => {
    console.log(`Shopping for: ${itemTitle}`)
    // You can handle routing here
  }

  return (
    <div className="customers-favorites">
      <div className="container">
        <div className="favorites-header">
          <h2>Customer Favorites</h2>
          <p>Top picks chosen by our happy customers</p>
        </div>

        <div className="favorites-grid">
          {favoriteItems.map((item) => (
            <div key={item.id} className="favorite-card">
              <div className="image-wrapper">
                <div className="image-border">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="image-overlay-border" />
              </div>
              <h3>{item.title}</h3>
              <button onClick={() => handleShopNow(item.title)}>SHOP NOW</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomersFavorites
