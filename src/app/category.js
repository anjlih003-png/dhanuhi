'use client';

import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

// Local Image Imports
import AlmondIcon from "../../public/images/almond.png";
import CashewIcon from "../../public/images/cashew.png";
import PistachioIcon from "../../public/images/pistachio.png";
import WalnutIcon from "../../public/images/walnut.png";
import DatesIcon from "../../public/images/dates.png";
import RaisinIcon from "../../public/images/raisins-64.png";


const categories = [
  { name: "Almonds", href: "/products?category=Almonds", image: AlmondIcon, count: "12 Products", fill: "#88C040" },
  { name: "Cashews", href: "/products?category=Cashews", image: CashewIcon, count: "8 Products", fill: "#F5D033" },
  { name: "Raisins", href: "/products?category=Raisins", image: RaisinIcon, count: "9 Products", fill: "#F5D033" },
  { name: "Pistachios", href: "/coming-soon", image: PistachioIcon, count: "6 Products", fill: "#88C040" },
  { name: "Walnuts", href: "/coming-soon", image: WalnutIcon, count: "5 Products", fill: "#F5D033" },
  { name: "Dates", href: "/coming-soon", image: DatesIcon, count: "7 Products", fill: "#88C040" },
  
];

export default function Category() {
  return (
    <section className="category-section py-5">
      <Container>
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-white border rounded-pill shadow-sm mb-3">
            <span className="bg-success" style={{ width: 8, height: 8, display: "inline-block" }} />
            <span className="text-success small fw-semibold text-uppercase">Our Collection</span>
          </div>
          <h2 className="fw-bold text-uppercase  mb-2" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '2.5rem' }}>
            Shop by Category
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 640 }}>
            Discover our hand-curated selection of premium nuts and dry fruits, sourced directly from trusted farms.
          </p>
        </div>

        <Row className="justify-content-center g-4">
          {categories.map((category) => (
            <Col key={category.name} xs={6} md={2} className="text-center">
              <Link href={category.href} className="text-decoration-none">
                <div className="d-flex flex-column align-items-center">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={200}
                    height={200}
                    className="category-icon img-fluid"
                    style={{ objectFit: "contain" }}
                  />
                  <h3 className="category-name mt-3 fs-6 text-uppercase mb-1 fw-bold text-dark" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                    {category.name}
                  </h3>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}