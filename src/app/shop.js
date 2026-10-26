"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "./productData";
import { useCart } from "./cart/CartContext";
import "@glidejs/glide/dist/css/glide.core.min.css";
import Glide from "@glidejs/glide";

export default function Shop() {
  const glideRef = useRef(null);
  const { addToCart, totalWeight, setToastMessage, setShowToast, setToastType } = useCart();

  useEffect(() => {
    const glide = new Glide(glideRef.current, {
      type: "carousel",
      startAt: 0,
      perView: 4,
      gap: 24,
      breakpoints: {
        1280: { perView: 4 },
        1024: { perView: 3 },
        640: { perView: 2 },
        480: { perView: 1 },
      },
    }).mount();

    return () => glide.destroy();
  }, []);

  const getWeight = (size) => {
    const weights = { "250gm": 0.25, "500gm": 0.5, "1kg": 1, "2kg": 2, Default: 0.25 };
    return weights[size] || 0;
  };

  const discountPercents = [44, 46, 40, 35, 30, 25, 20, 15, 10, 5, 5, 5, 5];
  const showRating = [false, false, true, true, false, false, false, false, false, false, false, false, false];
  const showFrom = [false, false, true, false, false, false, false, false, false, false, false, false, false];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-8">
      <div className="glide relative group" ref={glideRef}>
        <div className="glide__track overflow-hidden" data-glide-el="track">
          <ul className="glide__slides flex">
            {products.map((product, index) => (
              <li key={product.id} className="glide__slide">
                <Link href={`/product/${product.id}`} className="block">
                  <div className="group flex flex-col justify-between rounded-lg overflow-hidden transition-all duration-300 border border-gray-100 sm:border-none h-full">
                    <div className="relative bg-white aspect-[4/3] flex items-center justify-center p-4">
                      {discountPercents[index] && (
                        <span className="absolute top-3 left-3 bg-[#E52B20] text-white text-[11px] font-medium px-2.5 py-1 rounded-full shadow-sm z-10">
                          Save {discountPercents[index]}%
                        </span>
                      )}
                      {showRating[index] && (
                        <div className="absolute top-3 right-3 flex items-center gap-1 text-[11px] text-gray-500 font-medium z-10">
                          <svg className="w-3 h-3 fill-amber-400 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          <span>5.0</span>
                        </div>
                      )}
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        width={600}
                        height={450}
                      />
                    </div>
                    <div className="bg-[#FAF9F7] p-4 flex justify-between items-end min-h-[90px] rounded-b-lg">
                      <div className="space-y-1 pr-2">
                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">KAJU KOSHA</span>
                        <h3 className="text-[11px] font-semibold text-gray-800 line-clamp-1 uppercase leading-tight">
                          {product.name}
                        </h3>
                      </div>
                      <div className="text-right whitespace-nowrap">
                        <span className="text-xs font-bold text-[#E52B20] block">
                          {showFrom[index] && <span className="text-[10px] font-normal text-gray-500">From </span>}
                          {product.price}
                        </span>
                        <span className="text-[11px] text-gray-400 line-through block">
                          {(() => {
                            const num = parseInt(product.price.replace(/[^\d]/g, ""), 10);
                            return isNaN(num) ? "" : `₹ ${Math.round(num * 1.8)}.00`;
                          })()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-black hover:text-white text-gray-700 rounded-full flex items-center justify-center shadow-md transition-all border border-gray-200"
            data-glide-dir="<"
            aria-label="Previous Slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="glide__arrow glide__arrow--right absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-black hover:text-white text-gray-700 rounded-full flex items-center justify-center shadow-md transition-all border border-gray-200"
            data-glide-dir=">"
            aria-label="Next Slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}