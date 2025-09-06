import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly jump to the top whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
