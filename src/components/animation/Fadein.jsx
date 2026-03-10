import React, { useEffect, useRef, useState } from 'react'

const FadeIn = ({children, delay=0, duration=500, threshold=0.1}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentEl = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when element enters viewport
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold, isVisible]);
  return (
    <div
      ref={elementRef}
      className={isVisible ? 'animate-FadeIn' : 'opacity-0'}
      style={{
        animationDelay: isVisible ? `${delay}ms` : "0ms",
        animationDuration: `${duration}ms`,
        animationFillMode: 'both'
      }}
    >
      {children}

    </div>
  )
}

export default FadeIn