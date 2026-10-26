// "use client";

// import Image from "next/image";
  
// import Link from "next/link";
import Slider from "./slider";
import Category from "./category";
import TrendingCollections from "./trending";
import AllProducts from "./allproducts";
import AvailableOn from "./availableon";
import VideoTestimonials from "./videotestimonials";


export default function Home() {
  
  return (
    <>
        <Slider/>
        <Category/>
        <TrendingCollections/>
        <AvailableOn/>
        <AllProducts/>
        <VideoTestimonials/>
    </>
  );
}
