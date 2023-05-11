import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * This is a functional component that scrolls the window to the top whenever the pathname
 * changes.
 * @returns The `ScrollToTop` function is returning `null`.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export default ScrollToTop;
