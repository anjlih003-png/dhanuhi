'use client';

import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import MeeshoLogo from "../../public/images/meesho-logo.png";
import FlipkartLogo from "../../public/images/flipkart.png";
import AmazonLogo from "../../public/images/Amazon-Logo.png";
import ZeptoLogo from "../../public/images/zepto.webp";
import BlinkitLogo from "../../public/images/blinkit-com-banner-1.jpg";
import BigBasketLogo from "../../public/images/bigbasket.png";
import FreshAlmonds from "../../public/images/Fresh Almonds, Warmly Delivered.png";

const platforms = [
  { name: "Meesho", href: "https://www.meesho.com/Dhanuhinuts", logo: MeeshoLogo, rating: "4.8 ★", delivery: "Fast Delivery" },
  { name: "Flipkart", href: "https://www.flipkart.com/food-products/dry-fruit-nut-seed/dry-fruits/dhanuhi~brand/pr?sid=eat,ltb,ngb&marketplace=FLIPKART", logo: FlipkartLogo, rating: "4.7 ★", delivery: "Express Delivery" },
  { name: "Amazon", href: "https://www.amazon.in/s?k=Dhanuhi", logo: AmazonLogo, rating: "4.9 ★", delivery: "Prime Delivery" },
  { name: "BigBasket", href: "#", logo: BigBasketLogo, rating: "4.6 ★", delivery: "Scheduled Delivery" },
  { name: "Blinkit", href: "#", logo: BlinkitLogo, rating: "4.8 ★", delivery: "10-min Delivery" },
  { name: "Zepto", href: "#", logo: ZeptoLogo, rating: "4.7 ★", delivery: "10-min Delivery" },
];

export default function AvailableOn() {
  return (
    <section className="available-on-section py-5">
      <Container>
        <Row className="align-items-center g-5">
          {/* Left Column */}
          <Col lg={6}>
            <span className="available-eyebrow d-inline-block px-3 py-1 rounded-pill mb-3">
              Trusted Multi-Platform Availability
            </span>
            <h2 className="available-title mb-3">
              Also <span className="available-highlight">Available On</span>
            </h2>
            <p className="available-subtitle mb-4">
              Shop your favorite premium dry fruits & nuts directly on your preferred online shopping app with fast delivery and exclusive marketplace offers.
            </p>

            <Row className="g-3 mb-4">
              {platforms.map((p) => (
                <Col key={p.name} xs={12} sm={6}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="available-platform-card d-flex align-items-center justify-content-center p-3 text-decoration-none"
                    style={{ minHeight: 80 }}
                  >
                    <div className="available-platform-logo d-flex align-items-center justify-content-center flex-shrink-0">
                      {p.logo ? (
                        <Image src={p.logo} alt={p.name} width={150}   style={{ objectFit: 'contain' }} />
                      ) : (
                        <span className="fw-bold text-success fs-4">{p.name.charAt(0)}</span>
                      )}
                    </div>
                  </a>
                </Col>
              ))}
            </Row>

            <div className="d-flex flex-wrap gap-2 mb-4">
              <span className="available-trust-chip">🚚 100% Genuine Packaging</span>
              <span className="available-trust-chip">⚡ Same-day Dispatch</span>
              <span className="available-trust-chip">⭐ 4.9/5 Rated across platforms</span>
            </div>

            <Link href="/products" className="available-cta d-inline-flex align-items-center justify-content-center px-4 py-2 text-decoration-none">
              View All Products <i className="fa-solid fa-arrow-right ms-2" />
            </Link>
          </Col>

          {/* Right Column */}
          <Col lg={6}>
            <div className="available-image-wrapper position-relative">
              <Image
                src={FreshAlmonds}
                alt="Dhanuhi Premium Dry Fruits"
                width={700}
                height={500}
                className="img-fluid available-image"
              />
              <div className="available-floating available-floating-top">
                ⚡ Express Delivery
              </div>
              <div className="available-floating available-floating-bottom">
                <div className="d-flex align-items-center gap-2">
                  <span className="text-warning">⭐</span>
                  <div>
                    <p className="mb-0 fw-bold text-dark small">4.9 Rating</p>
                    <p className="mb-0 text-muted" style={{ fontSize: '11px' }}>50,000+ Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}