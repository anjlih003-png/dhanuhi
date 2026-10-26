'use client';

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useCart } from "./cart/CartContext";

const marqueeItems = [
  "Save up to 50% on selected items",
  "FREE SHIPPING on orders over $49",
  "NEW ARRIVALS - Check out our latest collection",
  "LOYALTY REWARDS - Earn points with every purchase",
  "SUMMER SALE - Save up to 50% on outdoor decor",
];

const categoryLinks = [
  { label: "Almond", query: "Almond" },
  { label: "Cashew", query: "Cashew" },
  { label: "Raisin", query: "Raisin" },
  { label: "Dates", query: "Dates" },
  { label: "Pistachio", query: "Pistachio" },
  { label: "Figs", query: "Figs" },
  { label: "Gift Items", query: "Gift Items" },
];

const popularSearches = ["Almond", "Cashew", "Raisins", "Dates", "Pistachio", "Figs"];

const parsePrice = (value) => {
  if (typeof value === "number") return value;
  const match = String(value || "").replace(/,/g, "").match(/[\d]+(?:\.[\d]+)?/);
  return match ? Number(match[0]) : 0;
};

const formatPrice = (value) => {
  const amount = Number.isFinite(Number(value)) ? Number(value) : parsePrice(value);
  return `₹${amount.toFixed(2)}`;
};

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const CompareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);

const BagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

function UtilityButton({ label, children, badge, empty = false, ...props }) {
  return (
    <button type="button" className="utility-button" aria-label={label} {...props}>
      {children}
      <span className={`utility-badge ${empty ? "utility-badge-empty" : ""}`}>{badge}</span>
    </button>
  );
}

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { cart, totalItems, total, removeFromCart, toastMessage, showToast, hideToast, toastType } = useCart();
  const searchRef = useRef(null);

  const suggestions = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return popularSearches;
    return popularSearches.filter((item) => item.toLowerCase().includes(query));
  }, [searchTerm]);

  useEffect(() => {
    setMounted(true);
    const readUser = () => {
      try {
        const raw = localStorage.getItem("user");
        setUser(raw ? JSON.parse(raw) : null);
      } catch (error) {
        setUser(null);
      }
    };
    readUser();
    const onAuthChanged = () => readUser();
    window.addEventListener("authChanged", onAuthChanged);
    window.addEventListener("storage", onAuthChanged);
    return () => {
      window.removeEventListener("authChanged", onAuthChanged);
      window.removeEventListener("storage", onAuthChanged);
    };
  }, []);

  useEffect(() => {
    if (!showToast) return undefined;
    const timer = window.setTimeout(hideToast, 2500);
    return () => window.clearTimeout(timer);
  }, [showToast, hideToast]);

   useEffect(() => {
     const overlayOpen = mobileMenuOpen || cartOpen;
     document.body.classList.toggle("header-overlay-open", overlayOpen);
     const handleKeyDown = (event) => {
       if (event.key === "Escape") {
         setMobileMenuOpen(false);
         setCartOpen(false);
         setSearchFocused(false);
       }
     };
     window.addEventListener("keydown", handleKeyDown);
     return () => {
       document.body.classList.remove("header-overlay-open");
       window.removeEventListener("keydown", handleKeyDown);
     };
  }, [mobileMenuOpen, cartOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();
    if (!query) return;
    router.push(`/search?query=${encodeURIComponent(query)}`);
    setSearchTerm("");
    setSearchFocused(false);
  };

  const handleSuggestion = (query) => {
    router.push(`/search?query=${encodeURIComponent(query)}`);
    setSearchTerm("");
    setSearchFocused(false);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem("user");
    } catch (error) {}
    setUser(null);
    router.push("/login");
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const renderMobileCategories = () => (
    categoryLinks.map((item) => (
      <Link key={item.label} href={`/search?query=${encodeURIComponent(item.query)}`} onClick={closeMobileMenu} className="mobile-nav-link">
        {item.label}
      </Link>
    ))
  );

  return (
    <>
      <div className="announcement-bar" aria-label="Announcements">
        <div className="marquee-content">
          {[0, 1, 2].map((copy) => (
            <p key={copy} className="marquee-item">
              <span>🎉 <span>SUMMER SALE - Save up to 60% on selected items</span></span>
              <span className="marquee-divider">✦</span>
              <span>🚚 <span>FREE SHIPPING on orders over $49</span></span>
              <span className="marquee-divider">✦</span>
              <span>🎁 <span>NEW ARRIVALS - Check out our latest collection</span></span>
              <span className="marquee-divider">✦</span>
              <span>⭐ <span>LOYALTY REWARDS - Earn points with every purchase</span></span>
              <span className="marquee-divider">✦</span>
            </p>
          ))}
        </div>
      </div>

      <header className="site-header">
        <div className="header-container">
          <div className="header-left">
            <Link href="/" className="header-logo" aria-label="Dhanuhi home">
              <img
                src="/images/logo.png"
                alt="Dhanuhi - Dry Fruits"
                className="header-logo-image"
                width={216}
                height={72}
                loading="eager"
              />
            </Link>
          </div>

          <div className="header-right">
            <div className="header-search" ref={searchRef}>
              <SearchIcon />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                onFocus={() => setSearchFocused(true)}
                placeholder="Search products..."
                aria-label="Search products"
                autoComplete="off"
              />

              {searchFocused && (
                <div className="search-suggestions">
                  <div className="search-suggestions-label">Popular Searches</div>
                  {suggestions.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => handleSuggestion(item)}
                    >
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="header-utilities">
              {mounted && user ? (
                <details className="account-control">
                  <summary className="utility-button" aria-label="Account menu">
                    <UserIcon />
                    <span className="utility-label">{user.name || "Account"}</span>
                  </summary>
                  <div className="account-menu">
                    <div className="account-menu-heading">
                      <UserIcon />
                      <span>{user.name || "Account"}</span>
                    </div>
                    <Link href="/account">My Account</Link>
                    <button type="button" className="account-logout" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </details>
              ) : mounted ? (
                <Link href="/login" className="utility-button" aria-label="Account">
                  <UserIcon />
                </Link>
              ) : (
                <span className="utility-button skeleton-utility" aria-hidden="true" />
              )}

              <UtilityButton label="Compare products" badge="0" empty>
                <CompareIcon />
              </UtilityButton>

              <UtilityButton label="Shopping cart" badge={totalItems} onClick={() => setCartOpen(true)}>
                <BagIcon />
              </UtilityButton>

              <button
                type="button"
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>

        <nav className="category-navigation" aria-label="Categories">
          <div className="header-nav">
            <div className="header-nav-left">
              {categoryLinks.map((item) => (
                <Link
                  key={item.label}
                  href={`/search?query=${encodeURIComponent(item.query)}`}
                  className={`header-nav-link ${pathname === "/search" ? "is-active" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="header-nav-right">
              <Link href="/products" className="category-deals-link">
                DEALS <span>HOT</span>
              </Link>
              {/* <Link href="/login" className="utility-button" aria-label="Account">
                <UserIcon />
              </Link>
              <UtilityButton label="Shopping cart" badge={totalItems} onClick={() => setCartOpen(true)}>
                <BagIcon />
              </UtilityButton> */}
            </div>
          </div>
        </nav>
      </header>

      <div className={`drawer-layer mobile-drawer-layer ${mobileMenuOpen ? "is-open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <button type="button" className="drawer-backdrop" onClick={closeMobileMenu} aria-label="Close menu" tabIndex={mobileMenuOpen ? 0 : -1} />
        <aside className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="mobile-drawer-header">
            <Link href="/" onClick={closeMobileMenu} className="mobile-drawer-logo">
              <img src="/images/logo.png" alt="Dhanuhi" width={200} height={60} />
            </Link>
            <button type="button" onClick={closeMobileMenu} aria-label="Close menu">
              <CloseIcon />
            </button>
          </div>
          <nav className="mobile-drawer-navigation">
            {renderMobileCategories()}
            <Link href="/products" className="mobile-nav-link" onClick={closeMobileMenu}>DEALS</Link>
          </nav>
          <div className="mobile-drawer-footer">
            <Link href="/account" className="mobile-nav-link" onClick={closeMobileMenu}>
              <UserIcon /><span>My Account</span>
            </Link>
            <div className="mobile-drawer-meta">Currency: <strong>INR</strong> | Language: <strong>ENGLISH</strong></div>
          </div>
        </aside>
      </div>

      <div className={`drawer-layer cart-drawer-layer ${cartOpen ? "is-open" : ""}`} aria-hidden={!cartOpen}>
        <button type="button" className="drawer-backdrop" onClick={() => setCartOpen(false)} aria-label="Close cart" tabIndex={cartOpen ? 0 : -1} />
        <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-drawer-title">
          <div className="cart-drawer-header">
            <h2 id="cart-drawer-title">Shopping Cart ({totalItems})</h2>
            <button type="button" onClick={() => setCartOpen(false)} aria-label="Close cart">
              <CloseIcon />
            </button>
          </div>
          <div className="cart-drawer-content">
            {cart.length === 0 ? (
              <div className="empty-cart">
                <BagIcon />
                <p>Your cart is currently empty.</p>
              </div>
            ) : (
              <div className="cart-items">
                {cart.map((item, index) => (
                  <div className="cart-item" key={`${item.id}-${item.size || "default"}-${index}`}>
                    <div className="cart-item-image">
                      <Image
                        src={typeof item.image === "string" ? item.image : item.image?.src || "/images/product-1.png"}
                        alt={item.name}
                        width={64}
                        height={64}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p>Qty: {item.quantity || 1}</p>
                      <span>{formatPrice(item.priceNumber || item.price)}</span>
                    </div>
                    <button
                      type="button"
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item)}
                      aria-label={`Remove ${item.name}`}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="cart-drawer-footer">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            <p>Taxes and shipping calculated at checkout.</p>
            <Link href="/checkout" className="checkout-button" onClick={() => setCartOpen(false)}>
              Proceed to Checkout
            </Link>
          </div>
        </aside>
      </div>

      {mounted && showToast && (
        <div className={`header-toast toast-${toastType || "success"}`} role="status">
          <CheckIcon />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}
