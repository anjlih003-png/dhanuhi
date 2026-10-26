'use client';

import { Container } from "react-bootstrap";
import Link from "next/link";

export default function ReturnPrivacyPage() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Return & Privacy Policy</h1>

      <section className="mb-5">
        <h3>Return Policy</h3>
        <p>
          We want you to be completely satisfied with your purchase. If you are not happy with your order, you can return eligible items within 7 days of delivery.
        </p>
        <ul>
          <li>Items must be unused, unopened, and in original packaging.</li>
          <li>Perishable food items are non-returnable once opened.</li>
          <li>Refunds are processed within 5-7 business days after inspection.</li>
          <li>Return shipping costs may apply unless the item is defective or incorrect.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h3>Privacy Policy</h3>
        <p>
          At Dhanuhi, we value your privacy. We collect only the information necessary to process your orders and improve your shopping experience.
        </p>
        <ul>
          <li>We do not sell or share your personal data with third parties for marketing.</li>
          <li>Payment details are processed securely via trusted gateways.</li>
          <li>We may use cookies to enhance site functionality and analytics.</li>
          <li>You can request deletion of your account data at any time.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h3>Shipping & Delivery</h3>
        <p>
          Orders are dispatched within 24 hours. Delivery typically takes 3-7 business days depending on location. Free shipping on orders above ₹499.
        </p>
      </section>

      <Link href="/" className="btn btn-dark">Back to Home</Link>
    </Container>
  );
}
