"use client"

import { Star } from "lucide-react"
import "./OurCustomers.scss"

const OurCustomers = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "Sarah’s experience was truly magical. Everything went smoothly.",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      text: "From start to finish, I felt supported. Truly professional and elegant execution!",
    },
    {
      id: 3,
      name: "Emily Davis",
      rating: 5,
      text: "A seamless journey from planning to celebration. Couldn’t have asked for more!",
    },
    {
      id: 4,
      name: "David Wilson",
      rating: 5,
      text: "Impressed with their attention to detail and customer support throughout.",
    },
    {
      id: 5,
      name: "Lisa Brown",
      rating: 5,
      text: "Outstanding service! Everything was beautifully managed and organized.",
    },
  ]

  const inspirationCards = [
    {
      id: 1,
      title: "Wedding Decor Ideas",
      description:
        "Explore dreamy wedding decor inspirations to set the tone for your special day.",
    },
    {
      id: 2,
      title: "Guest Welcome Tips",
      description:
        "Create lasting impressions by welcoming guests with thoughtful touches.",
    },
    {
      id: 3,
      title: "Theme Coordination",
      description:
        "Get inspired by our favorite color palettes and themes for a cohesive wedding vibe.",
    },
    {
      id: 4,
      title: "Personalized Keepsakes",
      description:
        "Inspire your guests with personalized items and heartfelt mementos.",
    },
  ]

  return (
    <div className="our-customers">
      <div className="our-customers__wrapper">
        {/* Section Header */}
        <div className="our-customers__header">
          <h1>Real Stories, Real Experiences - Our Customers Speak</h1>
        </div>

        {/* Testimonials Grid */}
        <div className="our-customers__testimonials">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <svg
                viewBox="0 0 200 280"
                className="testimonial-svg"
              >
                <path
                  d="M20 20 
                    Q30 10, 40 15 
                    Q50 5, 60 10 
                    Q70 0, 80 5 
                    Q90 0, 100 5 
                    Q110 0, 120 5 
                    Q130 0, 140 10 
                    Q150 5, 160 15 
                    Q170 10, 180 20 
                    Q190 30, 185 40 
                    Q195 50, 190 60 
                    Q200 70, 195 80 
                    Q200 90, 195 100 
                    Q200 110, 195 120 
                    Q200 130, 195 140 
                    Q200 150, 195 160 
                    Q200 170, 195 180 
                    Q200 190, 195 200 
                    Q200 210, 195 220 
                    Q190 230, 180 235 
                    L20 235 
                    Q10 230, 5 220 
                    Q0 210, 5 200 
                    Q0 190, 5 180 
                    Q0 170, 5 160 
                    Q0 150, 5 140 
                    Q0 130, 5 120 
                    Q0 110, 5 100 
                    Q0 90, 5 80 
                    Q0 70, 5 60 
                    Q0 50, 5 40 
                    Q10 30, 20 20 Z"
                  fill="#6B7280"
                  stroke="#D97706"
                  strokeWidth="3"
                />

                <foreignObject x="15" y="15" width="170" height="205">
                  <div className="testimonial-content" xmlns="http://www.w3.org/1999/xhtml">
                    <div className="avatar"></div>
                    <div className="stars">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="star-icon" />
                      ))}
                    </div>
                    <p className="testimonial-text">{t.text}</p>
                    <div className="name-bar">{t.name}</div>
                  </div>
                </foreignObject>
              </svg>
            </div>
          ))}
        </div>

        {/* Inspiration Cards */}
        <div className="our-customers__inspirations">
          {inspirationCards.map((card) => (
            <div key={card.id} className="inspiration-card">
              <div className="image-placeholder"></div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button>Read More {">"}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurCustomers
