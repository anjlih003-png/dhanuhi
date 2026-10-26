'use client';

import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const productCategories = [
  { name: "Almonds", href: "/products?category=Almonds" },
  { name: "Cashews", href: "/products?category=Cashews" },
  { name: "Pistachios", href: "/products?category=Pistachios" },
  { name: "Walnuts", href: "/products?category=Walnuts" },
  { name: "Dates", href: "/products?category=Dates" },
  { name: "Raisins", href: "/products?category=Raisins" },
];

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a1a', color: '#ffffff' }} className="pt-5 pb-4">
      <Container>
        <Row className="mb-4">
          {/* About */}
          <Col lg={4} md={6} className="mb-4">
            <h4 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Dhanuhi</h4>
            <p className="mb-3" style={{ color: '#b0b0b0', lineHeight: '1.8', fontSize: '14px' }}>
              Premium dry fruits supplier in India. Fresh, high-quality cashews, almonds, pistachios, and more delivered to your doorstep with the finest quality and taste.
            </p>
            <div className="d-flex gap-3">
              <a href="https://www.instagram.com/dhanuhinuts/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '20px' }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com/dhanuhinuts/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '20px' }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.facebook.com/moviemasalaclip/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '20px' }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '20px' }}>
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </Col>

          {/* Our Products */}
          <Col lg={2} md={6} className="mb-4">
            <h5 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Our Products</h5>
            <ul className="list-unstyled">
              {productCategories.map((cat) => (
                <li key={cat.name} className="mb-2">
                  <Link href={cat.href} className="text-decoration-none" style={{ color: '#b0b0b0', fontSize: '14px', transition: 'color 0.2s' }}>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} className="mb-4">
            <h5 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link href="/" className="text-decoration-none" style={{ color: '#b0b0b0', fontSize: '14px' }}>Home</Link></li>
              <li className="mb-2"><Link href="/products" className="text-decoration-none" style={{ color: '#b0b0b0', fontSize: '14px' }}>Shop</Link></li>
              <li className="mb-2"><Link href="/cart" className="text-decoration-none" style={{ color: '#b0b0b0', fontSize: '14px' }}>Cart</Link></li>
              <li className="mb-2"><Link href="/contact" className="text-decoration-none" style={{ color: '#b0b0b0', fontSize: '14px' }}>Contact Us</Link></li>
                <li className="mb-2"><Link href="/return-privacy" className="text-decoration-none" style={{ color: '#b0b0b0', fontSize: '14px' }}>Return & Privacy Policy</Link></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={4} md={6} className="mb-4">
            <h5 className="fw-bold mb-3" style={{ color: '#ffffff' }}>Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-start" style={{ color: '#b0b0b0', fontSize: '14px' }}>
                <i className="bi bi-envelope me-2 mt-1"></i>
                <span>dhanuhinuts@gmail.com</span>
              </li>
              <li className="mb-2 d-flex align-items-start" style={{ color: '#b0b0b0', fontSize: '14px' }}>
                <i className="bi bi-telephone me-2 mt-1"></i>
                <span>+91 98776 91718</span>
              </li>
              <li className="mb-2 d-flex align-items-start" style={{ color: '#b0b0b0', fontSize: '14px' }}>
                <i className="bi bi-geo-alt me-2 mt-1"></i>
                <span>Jalandhar, Punjab, India</span>
              </li>
            </ul>
          </Col>
        </Row>

        <hr style={{ borderColor: '#333333' }} />
        <div className="d-flex flex-wrap justify-content-between align-items-center pt-3 gap-3">
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <span style={{ color: '#b0b0b0', fontSize: '14px' }}>We accept:</span>
            <Image src="/images/Visa_Inc._logo_(2021–present).svg.webp" alt="Visa" width={50} height={20} style={{ objectFit: "contain" }} />
            <Image src="/images/MasterCard_Logo.svg.webp" alt="Mastercard" width={40} height={30} style={{ objectFit: "contain" }} />
            <i className="bi bi-cc-paypal" style={{ color: '#ffffff', fontSize: '28px' }}></i>
            <Image src="/images/UPI-Logo-vector.svg.webp" alt="UPI" width={50} height={20} style={{ objectFit: "contain" }} />
          </div>
          <p className="mb-0" style={{ color: '#b0b0b0', fontSize: '14px' }}>&copy; {new Date().getFullYear()} Dhanuhi. All rights reserved.</p>
          <p className="mb-0" style={{ color: '#b0b0b0', fontSize: '14px' }}>FSSAI License: 22125020001653</p>
        </div>
      </Container>
    </footer>
  );
}
