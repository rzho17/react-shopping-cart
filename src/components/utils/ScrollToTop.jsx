import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // scrolls to the top when the user clicks to another link
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
