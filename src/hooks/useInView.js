import { useEffect, useRef, useState } from "react";

export default function useInView(threshold = 0.6) {

  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(([entry]) => {

      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }

    }, { threshold });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();

  }, [threshold]);

  return { ref, isInView };
}