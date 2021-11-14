import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  let checkScreen = () => {
    setIsScreenSmall(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isScreenSmall;
};

export default useScreenSize;
