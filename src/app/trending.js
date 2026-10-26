"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { products } from "./productData";
import "./trending.css";

const initialCountdown = 328 * 86400 + 6 * 3600 + 44 * 60 + 47;

const featuredProductIds = ["1", "3", "4", "6"];
const featuredProducts = featuredProductIds
  .map((id) => products.find((product) => product.id === id))
  .filter(Boolean);

const productStyles = [
  { className: "trending-visual-grape", badge: "-16%" },
  { className: "trending-visual-banana", badge: "-33%" },
  { className: "trending-visual-avocado", badge: "-24%" },
  { className: "trending-visual-kiwi", badge: null },
];

function Rating({ value = 0, reviewCount = 0 }) {
  return (
    <div className="trending-rating" aria-label={`${value} out of 5 stars`}>
      <div className="trending-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={star <= value ? "trending-star" : "trending-star trending-star-muted"}>
            ★
          </span>
        ))}
      </div>
      <span className="trending-rating-count">({reviewCount})</span>
    </div>
  );
}

export default function TrendingCollections() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(initialCountdown);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(true);
  const [bananaSwatch, setBananaSwatch] = useState("botanic-1");
  const [kiwiSwatch, setKiwiSwatch] = useState("kiwi-1");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft((current) => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const pad = (value, length = 2) => String(value).padStart(length, "0");
  const [notificationIndex, setNotificationIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setNotificationIndex((current) => (current + 1) % featuredProducts.length);
    }, 300000);
    return () => window.clearInterval(id);
  }, []);

  const notificationProduct = featuredProducts[notificationIndex];

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    router.push(`/search?query=${encodeURIComponent(query)}`);
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <section className="trending-section">
      <div className="trending-container">
        <div className="trending-heading">
          <span className="trending-eyebrow">Branded Collection</span>
          <h1 className="trending-title">Trending In Collections</h1>
        </div>

        <div className="trending-grid">
          {featuredProducts.map((product, index) => {
            const style = productStyles[index] || productStyles[productStyles.length - 1];
            const showCountdown = index === 1;

            return (
              <article className="trending-product" key={product.id}>
                <Link href={`/product/${product.id}`} className="trending-visual-link">
                  <div className={`trending-visual ${style.className}`}>
                    {style.badge && <span className="trending-badge">{style.badge}</span>}
                     <Image
                       src={product.image}
                       alt={product.name}
                       width={300}
                       height={300}
                       priority={index === 0}
                       className="trending-product-image"
                       sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 300px"
                     />
                    {showCountdown && (
                      <div className="trending-countdown" aria-label="Offer countdown">
                        <div>
                          <strong>{pad(days, 3)}</strong>
                          <span>Days</span>
                        </div>
                        <b>:</b>
                        <div>
                          <strong>{pad(hours)}</strong>
                          <span>Hours</span>
                        </div>
                        <b>:</b>
                        <div>
                          <strong>{pad(minutes)}</strong>
                          <span>Mins</span>
                        </div>
                        <b>:</b>
                        <div>
                          <strong>{pad(seconds)}</strong>
                          <span>Secs</span>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>

                <div className={`trending-details ${index === 3 ? "trending-details-spaced" : ""}`}>
                  <Rating value={product.rating} reviewCount={product.reviewCount} />
                  <h3 className="trending-product-title">
                    <Link href={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <div className="trending-price">
                    <span>{product.price}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {notificationOpen && notificationProduct && (
        <div className="trending-notification">
          <button type="button" className="trending-notification-close" onClick={() => setNotificationOpen(false)} aria-label="Close notification">
            ×
          </button>
          <div className="trending-notification-thumb">
            <Image src={notificationProduct.image} alt={notificationProduct.name} width={48} height={48} className="trending-notification-image" />
          </div>
          <div className="trending-notification-copy">
            <span>Product Notification</span>
            <h4>{notificationProduct.name}</h4>
            <p>In Mumbai, India</p>
            <small>About 10 Minutes Ago</small>
          </div>
        </div>
      )}

      <button type="button" className="trending-back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to Top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {searchOpen && (
        <div className="trending-search-overlay" role="dialog" aria-modal="true" aria-label="Search products">
          <div className="trending-search-panel">
            <div className="trending-search-header">
              <span>Search Products</span>
              <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search">×</button>
            </div>
            <form className="trending-search-form" onSubmit={handleSearch}>
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search pistachios, almonds, cashews, raisins..."
                aria-label="Search products"
              />
              <button type="submit" aria-label="Submit search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
