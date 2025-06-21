import { useEffect, useState } from "react";

const useSectionInView = (sectionIds) => {
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setCurrentSection(visible.target.id);
        }
      },
      {
        threshold: 0, // triggers as soon as it enters the root margin
        rootMargin: "-50% 0px -50% 0px", // center of viewport only
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, [sectionIds]);

  return currentSection;
};

export default useSectionInView;
