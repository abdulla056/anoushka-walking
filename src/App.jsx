import { useState } from "react";
import "./App.css";
import { initialText } from "./assets/data";
import { AnimatePresence, motion } from "framer-motion";
import initialBackground from "./assets/initial_background.svg";

function App() {
  const [textIndex, setTextIndex] = useState(0);

  function updateTextIndex() {
    setTextIndex((prevIndex) => {
      if (prevIndex === initialText.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  }

  return (
    <div
      className={`w-full h-screen bg-cover bg-center opacity-75`}
      style={{ backgroundImage: `url(${initialBackground})` }}
    >
      <div className="items-center gap-6 flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <AnimatePresence mode="wait">
          <motion.div
            onClick={updateTextIndex}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            key={textIndex}
            className=" text-white text-center text-3xl"
          >
            {initialText[textIndex]}
          </motion.div>
        </AnimatePresence>
        <motion.div
          className="text-white text-lg font-semibold cursor-pointer"
          initial={{ opacity: 1 }}
          animate={{ y: [0, 10, 0], opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Click to Continue
        </motion.div>
      </div>
    </div>
  );
}

export default App;
