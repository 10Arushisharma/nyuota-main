import React from "react"
import "./HeroSection.scss"
import IMG1 from "../../assets/WeddingImages/wed.jpg"
import IMG2 from "../../assets/WeddingImages/images.jpeg"



"use client"


import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import "./HeroSection.scss"

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const sliderImages = [
    "/a1.jpg",
    "/a2.jpg?height=400&width=1200",
    "/a3.jpg?height=400&width=1200",
    "/a4.svg?height=400&width=1200",
  ]

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlay, sliderImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="hero-container">
      <div className="slider-wrapper">
        <div className="breadcrumb">
          <span>Home</span>
          <ChevronDown className="chevron-icon" />
        </div>

        <div className="slider-images">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`slider-image ${index === currentSlide ? "active" : ""}`}
            >
              <img src={image || "/placeholder.svg"} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <button onClick={prevSlide} className="nav-button left">
          <ChevronLeft />
        </button>
        <button onClick={nextSlide} className="nav-button right">
          <ChevronRight />
        </button>

        <div className="indicators">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`indicator-dot ${index === currentSlide ? "active" : ""}`}
            />
          ))}
        </div>

        <button onClick={() => setIsAutoPlay(!isAutoPlay)} className="autoplay-button">
          {isAutoPlay ? "Pause" : "Play"}
        </button>
      </div>

      <div className="promo-section">
        {[1, 2].map((_, i) => (
          <div key={i} className={`promo-card ${i === 1 ? "border-left" : ""}`}>
            <div className="promo-text">
              <p>Make your own - FREE</p>
              <h2>WEDDING</h2>
              <h2>WEBSITE</h2>
              <button>EXPLORE DESIGNS</button>
              <p className="sub-text">A simple, beautiful website just for you - FREE</p>
            </div>
            <div className="promo-image">
              <img src={IMG1} alt="Mockup"/>
              <div className="mobile-preview">
                <img src={IMG2} alt="Mobile" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSection
