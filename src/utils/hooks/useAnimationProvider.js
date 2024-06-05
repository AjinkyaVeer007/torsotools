// useVisibility.js
import { useEffect, useState, useRef } from "react";

const useAnimationProvider = (threshold = 0.1) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return [isAnimate, elementRef];
};

export default useAnimationProvider;
