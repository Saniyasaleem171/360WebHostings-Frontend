import React from "react";
import FAQHero from "../components/sections/FAQHero";
import FAQCategories from "../components/sections/FAQCategories";
import FAQList from "../components/sections/FAQList";
import FAQContact from '../components/sections/FAQContact';

export default function FAQ() {
  return (
    <div className="relative w-full">

      {/* HERO */}
      <FAQHero />

      {/* CATEGORIES — positioned overlapping hero */}
      <div className="relative z-20">
        <FAQCategories />
      </div>

      <FAQList />
      <FAQContact />

    </div>
  );
}
