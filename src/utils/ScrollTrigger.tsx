import { useEffect, useRef, useState } from 'react';

interface ScrollTriggerProps {
  onEnter: () => void;
  onExit?: () => void;
  children: React.ReactNode;
}

const ScrollTrigger: React.FC<ScrollTriggerProps> = ({ onEnter, onExit, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            onEnter();
          } else if (!entry.isIntersecting && isVisible) {
            setIsVisible(false);
            onExit && onExit();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible, onEnter, onExit]);

  return <div ref={ref}>{children}</div>;
};

export default ScrollTrigger;
