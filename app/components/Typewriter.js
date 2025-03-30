import { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 150 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className="text-lg text-white">{displayed}</p>;
};

export default Typewriter;