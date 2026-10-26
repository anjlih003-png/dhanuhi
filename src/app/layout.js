import "./style.css";
import "./navbar.css";

import { AuthProvider } from '@/context/AuthContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Epilogue } from "next/font/google";
import Header from "./navbar";
import Footer from "./footer";
import TrustStrip from "./truststrip";
import { CartProvider } from "./cart/CartContext";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-epilogue",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif']
});

export const metadata = {
  title: "Dry Fruit Wholesale Supplier in India | Kaju Kosha",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${epilogue.className} font-sans`} style={{ fontFamily: 'var(--font-epilogue), "Epilogue", sans-serif' }}>
        <AuthProvider>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <TrustStrip />
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
