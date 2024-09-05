import { useEffect } from "react";

const useScrollToTop = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }, []); // Empty dependency array means this runs once on mount
};

export default useScrollToTop;
