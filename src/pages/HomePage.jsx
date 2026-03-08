import React from "react";
import Navbar from "@/components/layouts/Navbar";
import Header from "@/sections/Header";
import Intro from "../sections/Intro";
import Products from "../sections/Products";
import Testimonials from "../sections/Testimonial";
import Footer from "@/components/layouts/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Intro />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
