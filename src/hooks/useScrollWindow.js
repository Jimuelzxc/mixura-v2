import { useEffect } from "react";
export const useScrollWindow = (callback) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Makes the scroll smooth
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      callback();
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { handleScrollToTop };
};
