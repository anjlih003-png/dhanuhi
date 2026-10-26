'use client';

import { Container, Row, Col } from "react-bootstrap";

const items = [
  { icon: "bi-truck", title: "Free Delivery", desc: "On orders above ₹499" },
  { icon: "bi-shield-lock", title: "Secure Payment", desc: "100% safe checkout" },
  { icon: "bi-arrow-repeat", title: "Easy Returns", desc: "7-day return policy" },
  { icon: "bi-headset", title: "24/7 Support", desc: "Dedicated customer care" },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip py-4" style={{ background: 'rgb(11, 82, 57)' }}>
      <Container>
        <Row className="g-3 justify-content-center">
          {items.map((item) => (
            <Col key={item.title} xs={6} md={3} className="text-center">
              <div className="d-flex flex-column align-items-center gap-2">
                <i className={`bi ${item.icon} trust-strip-icon text-white`} />
                <div>
                  <h6 className="mb-0 fw-bold text-white">{item.title}</h6>
                  <small className="text-white-50">{item.desc}</small>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}