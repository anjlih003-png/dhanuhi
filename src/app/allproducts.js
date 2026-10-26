'use client';

import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "./productData";
import { useCart } from "./cart/CartContext";
import FreshAlmonds from "../../public/images/Fresh Almonds, Warmly Delivered.png";
import MeeshoLogo from "../../public/images/meesho-logo.png";
import AmazonLogo from "../../public/images/Amazon-Logo.png";
import FlipkartLogo from "../../public/images/flipkart.png";

const getWeight = (size) => {
    const weights = {
        "100gm": 0.1,
        "200gm": 0.2,
        "250gm": 0.25,
        "500gm": 0.5,
        "1kg": 1,
        "2kg": 2,
        "Default": 0.25,
    };
    return weights[size] || 0;
};

export default function AllProducts() {
    const { addToCart, totalWeight, setToastMessage, setShowToast, setToastType } = useCart();
    const [productSelectedSizes, setProductSelectedSizes] = useState({});

    const handleSizeChange = (productId, size) => {
        setProductSelectedSizes(prev => ({ ...prev, [productId]: size }));
    };

    return (
        <>
            {/* Fresh Almonds Banner */}
            <section className="py-4">
                <Container>
                    <Row className="justify-content-center">

                    </Row>
                </Container>
            </section>

            <Container className="py-5">
                <div className="text-center mb-5">
                    <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill mb-2">Our Collection</span>
                    <h2 className="fw-bold mb-2">Featured Products</h2>
                    <p className="text-muted">Explore our handpicked premium dry fruits selection</p>
                </div>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {products.slice(0, 8).map((product, idx) => {
                        const productSizes = Array.isArray(product.sizes) ? product.sizes : product.size ? [product.size] : ["250gm"];
                        const selectedSize = productSelectedSizes[product.id] || productSizes[0];

                        return (
                            <Col key={`${product.id}-${idx}`}>
                                <Card className="h-100 shadow-sm border-0 position-relative overflow-hidden">
                                    <div className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1" style={{ fontSize: '11px', fontWeight: '600', zIndex: 1 }}>
                                        Best Seller
                                    </div>
                                    <Link href={`/product/${product.id}`} className="text-decoration-none text-reset">
                                        <div style={{ height: 220, position: "relative", overflow: "hidden", background: '#f8f9fa' }}>
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={420}
                                                height={220}
                                                style={{ objectFit: "contain", width: "100%", height: "220px", padding: "15px" }}
                                                className="img-fluid"
                                            />
                                        </div>
                                    </Link>
                                    <Card.Body className="d-flex flex-column p-3">
                                        <h6 className="card-title mb-1 fw-semibold text-dark" style={{ fontSize: '14px', minHeight: '40px', lineHeight: '1.3' }}>{product.name}</h6>
                                        <div className="mb-2">
                                            <div className="d-flex align-items-center gap-2">
                                                <span style={{ color: '#ffc107', fontSize: '13px', fontWeight: 'bold' }}>
                                                    {[...Array(5)].map((_, i) => (
                                                        <span key={i} style={{ opacity: i < Math.floor(product.rating || 0) ? 1 : 0.3 }}>
                                                            ★
                                                        </span>
                                                    ))}
                                                </span>
                                                <small style={{ color: '#6c757d' }}>({product.reviewCount || 0})</small>
                                            </div>
                                        </div>
                                        <div className="mb-2 text-success fw-bold" style={{ fontSize: '17px' }}>{product.price}</div>
                                        <div className="mb-3">
                                            <div className="d-flex gap-1 flex-wrap justify-content-start">
                                                {productSizes.slice(0, 3).map((sz) => (
                                                    <button
                                                        key={sz}
                                                        className={`btn btn-sm border-0 fw-semibold ${selectedSize === sz ? 'btn-warning text-dark' : 'btn-light text-muted'}`}
                                                        onClick={() => handleSizeChange(product.id, sz)}
                                                        style={{ fontFamily: 'var(--font-jost)', minWidth: '45px', fontSize: '11px', padding: '2px 6px' }}
                                                    >
                                                        {sz}
                                                    </button>
                                                ))}
                                                {productSizes.length > 3 && <span className="text-muted small align-self-center">+{productSizes.length - 3}</span>}
                                            </div>
                                        </div>
                                        <div className="mt-auto d-flex gap-2">
                                            <Link href={`/product/${product.id}`} className="btn btn-outline-dark btn-sm flex-grow-1">View Details</Link>
                                            <Button variant="success" size="sm" className="flex-grow-1" onClick={() => {
                                                const size = productSelectedSizes[product.id] || productSizes[0];
                                                const weight = getWeight(size);
                                                if (totalWeight + weight > 5) {
                                                    setToastMessage("Cannot add more than 5kg to cart");
                                                    setToastType("danger");
                                                    setShowToast(true);
                                                } else {
                                                    addToCart({ ...product, size: size, quantity: 1 });
                                                }
                                            }}>
                                                <i className="bi bi-cart-plus me-1"></i> Add
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
                <div className="text-center mt-5">
                    <Link href="/products" className="btn btn-success btn-lg px-5 shadow-sm">
                        View All Products <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                </div>
            </Container>
        </>
    );
}