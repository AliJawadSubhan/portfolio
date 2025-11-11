import { useEffect } from "react";

const SmoothScrollSection = ({ children }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-fade");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // 20% visible triggers animation
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return <div className="scroll-fade">{children}</div>;
};

export default SmoothScrollSection;
