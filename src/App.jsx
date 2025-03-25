import { useState } from "react";
import "./App.css";
import { initialText } from "./assets/data";
import { AnimatePresence, motion } from "framer-motion";
import initialBackground from "./assets/initial_background.svg";
import WalkingComponent from "./WalkingComponent";

function App() {
  const [textIndex, setTextIndex] = useState(0);
  const [walking, setWalking] = useState(false);

  function updateTextIndex() {
    setTextIndex((prevIndex) => {
      if (prevIndex === initialText.length - 1) {
        return prevIndex;
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
        <AnimatePresence>
          {walking && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <WalkingComponent/>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!walking && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
            >
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
              <AnimatePresence mode="wait">
                {textIndex === initialText.length - 1 && (
                  <motion.div
                    className="text-white text-lg font-semibold cursor-pointer"
                    initial={{ opacity: 0, y: -7 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    onClick={() => setWalking(true)}
                  >
                    Click here to start walking!
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
