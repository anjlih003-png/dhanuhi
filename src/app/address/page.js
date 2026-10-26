'use client';

import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";

const emptyAddress = {
  fullName: "",
  phoneNumber: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zipCode: "",
  country: "India",
};

export default function AddressPage() {
  const router = useRouter();
  const [shipping, setShipping] = useState({ ...emptyAddress });
  const [billing, setBilling] = useState({ ...emptyAddress });
  const [sameAsShipping, setSameAsShipping] = useState(true);

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShipping((prev) => ({ ...prev, [name]: value }));
    if (sameAsShipping) {
      setBilling((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBilling((prev) => ({ ...prev, [name]: value }));
  };

  const handleSameToggle = (e) => {
    const checked = e.target.checked;
    setSameAsShipping(checked);
    if (checked) setBilling({ ...shipping });
  };

  const validate = (data) => data.fullName && data.phoneNumber && data.addressLine1 && data.city && data.zipCode;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate(shipping)) {
      alert("Please fill in all required shipping fields.");
      return;
    }
    if (!sameAsShipping && !validate(billing)) {
      alert("Please fill in all required billing fields.");
      return;
    }
    localStorage.setItem("shippingAddress", JSON.stringify(shipping));
    localStorage.setItem("billingAddress", JSON.stringify(sameAsShipping ? shipping : billing));
    router.push("/payment");
  };

  const renderFields = (data, onChange, prefix) => (
    <>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId={`${prefix}fullName`}>
            <Form.Label>Full Name *</Form.Label>
            <Form.Control type="text" name="fullName" value={data.fullName} onChange={onChange} required className="address-input" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId={`${prefix}phoneNumber`}>
            <Form.Label>Phone Number *</Form.Label>
            <Form.Control type="tel" name="phoneNumber" value={data.phoneNumber} onChange={onChange} required className="address-input" />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId={`${prefix}addressLine1`}>
        <Form.Label>Address Line 1 *</Form.Label>
        <Form.Control type="text" name="addressLine1" value={data.addressLine1} onChange={onChange} required className="address-input" />
      </Form.Group>

      <Form.Group className="mb-3" controlId={`${prefix}addressLine2`}>
        <Form.Label>Address Line 2</Form.Label>
        <Form.Control type="text" name="addressLine2" value={data.addressLine2} onChange={onChange} className="address-input" />
      </Form.Group>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId={`${prefix}city`}>
            <Form.Label>City *</Form.Label>
            <Form.Control type="text" name="city" value={data.city} onChange={onChange} required className="address-input" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId={`${prefix}state`}>
            <Form.Label>State</Form.Label>
            <Form.Control type="text" name="state" value={data.state} onChange={onChange} className="address-input" />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId={`${prefix}zipCode`}>
            <Form.Label>Zip Code *</Form.Label>
            <Form.Control type="text" name="zipCode" value={data.zipCode} onChange={onChange} required className="address-input" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId={`${prefix}country`}>
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" name="country" value={data.country} onChange={onChange} readOnly className="address-input bg-light" />
          </Form.Group>
        </Col>
      </Row>
    </>
  );

  return (
    <Container className="py-5">
      <h2 className="mb-4 fw-bold text-center">Shipping & Billing Address</h2>
      <Row className="justify-content-center g-4">
        <Col md={6}>
          <Card className="shadow-sm border-0 rounded-4 h-100">
            <Card.Header className="bg-white fw-bold py-3">Shipping Address</Card.Header>
            <Card.Body className="p-4">
              <Form onSubmit={handleSubmit}>
                {renderFields(shipping, handleShippingChange, "ship")}
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm border-0 rounded-4 h-100">
            <Card.Header className="bg-white fw-bold py-3 d-flex justify-content-between align-items-center">
              <span>Billing Address</span>
              <Form.Check
                type="checkbox"
                id="sameAsShipping"
                label="Same as shipping"
                checked={sameAsShipping}
                onChange={handleSameToggle}
              />
            </Card.Header>
            <Card.Body className="p-4">
              {!sameAsShipping && renderFields(billing, handleBillingChange, "bill")}
              {sameAsShipping && <p className="text-muted mb-0">Billing address is same as shipping address.</p>}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="text-center mt-4">
        <Button variant="dark" type="submit" className="px-5 py-3 rounded-pill fw-bold" onClick={handleSubmit}>
          Proceed to Payment
        </Button>
      </div>
    </Container>
  );
}