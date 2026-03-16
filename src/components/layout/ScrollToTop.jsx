import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Force redirect to home on initial load/refresh
        if (pathname !== '/') {
            navigate('/', { replace: true });
        }

        // Prevent browser from restoring scroll position on refresh
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
    }, [navigate]); // Only run once on mount

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
