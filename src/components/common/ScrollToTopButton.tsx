"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when FAQ section becomes visible
  const toggleVisibility = () => {
    const faqSection = document.querySelector('[data-section="faq"]');

    if (faqSection) {
      const rect = faqSection.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      setIsVisible(isVisible);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gray-800 hover:bg-gray-700 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
