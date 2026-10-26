'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { Container } from "react-bootstrap";

const videos = [
  { id: 1, title: "Premium Cashews", productId: "17", src: "/images/testimonials-3.mp4", highlight: "CRUNCHY & WHOLE", price: "₹420", original: "₹499", desc: "W240 Grade | 250g", reviewer: "Rohan Mehta", location: "Mumbai" },
  { id: 2, title: "Premium Almonds", productId: "3", src: "/images/testimonials-3%20(2).mp4", highlight: "100% PURE & UNREFINED", price: "₹350", original: "₹399", desc: "Premium Quality | 250g", reviewer: "Ananya Sharma", location: "Delhi" },
  { id: 3, title: "Premium Raisins", productId: "6", src: "/images/testimonials-1.mp4", highlight: "GRANULAR & AROMATIC", price: "₹280", original: "₹320", desc: "Sweet & Tasty | 250g", reviewer: "Priya Nair", location: "Bengaluru" },
  { id: 4, title: "Pistachios", productId: "1", src: "/images/testimonials-1%20(2).mp4", highlight: "HOT & TASTY", price: "₹520", original: "₹599", desc: "Premium Grade | 250g", reviewer: "Kavita Verma", location: "Pune" },
];

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState(null);
  const glideRef = useRef(null);
  const glideInstanceRef = useRef(null);

  useEffect(() => {
    if (glideRef.current) {
      const glide = new Glide(glideRef.current, {
        type: "carousel",
        startAt: 0,
        perView: 4,
        gap: 24,
        breakpoints: {
          1024: { perView: 3 },
          768: { perView: 2 },
          480: { perView: 1 },
        },
      });
      glide.mount();
      glideInstanceRef.current = glide;
      return () => {
        glideInstanceRef.current = null;
        glide.destroy();
      };
    }
  }, []);

  return (
    <section className="video-testimonials-section py-5">
      <Container>
        <div className="text-center mb-4">
          <span className="video-eyebrow">Interactive Shoppable Reels</span>
          <h2 className="video-title text-uppercase">Watch & Shop</h2>
          <p className="video-subtitle">See how our customers transform their daily recipes with organic purity.</p>
        </div>

        <div className="glide" ref={glideRef}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {videos.map((v) => (
                <li key={v.id} className="glide__slide">
                  <div
                    className="video-card"
                    onClick={() => setActiveVideo(v)}
                  >
                    <video
                      src={v.src}
                      className="video-card-media"
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                    <div className="video-card-overlay" />
                    <div className="video-card-content">
                      <span className="video-card-badge">Customer Favourite</span>
                      <h3 className="video-card-highlight">{v.highlight}</h3>
                    </div>
                    <Link
                      href={`/product/${v.productId}`}
                      className="video-card-product"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <div className="flex-grow-1 min-w-0">
                          <h4 className="video-card-product-title">{v.title}</h4>
                          <p className="video-card-product-desc">{v.desc}</p>
                          <div className="video-card-prices">
                            <span className="video-card-price">{v.price}</span>
                            <span className="video-card-original">{v.original}</span>
                          </div>
                        </div>
                        <button
                          className="video-card-add"
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        >
                          <i className="fa-solid fa-plus" />
                        </button>
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex justify-content-center gap-2 mt-3">
            <button className="video-arrow" onClick={() => glideInstanceRef.current?.go('<')} aria-label="Previous">
              <i className="fa-solid fa-chevron-left" />
            </button>
            <button className="video-arrow" onClick={() => glideInstanceRef.current?.go('>')} aria-label="Next">
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>

        {activeVideo && (
          <div className="video-modal" onClick={() => setActiveVideo(null)}>
            <div className="video-modal-dialog" onClick={(e) => e.stopPropagation()}>
              <button className="video-modal-close" onClick={() => setActiveVideo(null)}>
                <i className="fa-solid fa-xmark" />
              </button>
              <video src={activeVideo.src} className="video-modal-media" autoPlay muted loop playsInline />
              <div className="video-modal-footer">
                <div>
                  <h4 className="video-modal-title">{activeVideo.title}</h4>
                  <p className="video-modal-desc">{activeVideo.desc}</p>
                </div>
                <div className="text-end">
                  <span className="video-modal-price">{activeVideo.price}</span>
                  <span className="video-modal-original">{activeVideo.original}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}