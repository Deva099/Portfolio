import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToHash Component
 * Ensures that cross-page hash links correctly scroll to their target elements.
 * Works by monitoring hash changes and using the browser's scrollIntoView.
 */
const ScrollToHash = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            // Delay slightly to allow the page to render
            const timeoutId = setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);

            return () => clearTimeout(timeoutId);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToHash;
