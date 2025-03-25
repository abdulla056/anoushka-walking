import { useState } from "react";
import "./App.css";
import { initialText } from "./assets/data";
import { AnimatePresence, motion } from "framer-motion";
import initialBackground from "./assets/initial_background.svg";
import WalkingComponent from "./WalkingComponent";
import rabbit from "./assets/rabbit.png";
import rabbit2 from "./assets/rabbit-2.png";

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
              <WalkingComponent />
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
              className="h-full w-full"
            >
              <AnimatePresence>
                {textIndex === initialText.length - 1 && (
                  <motion.img
                    initial={{ opacity: 0, x:150 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5, delay:1.5 }}
                    key={textIndex}
                    src={rabbit}
                    alt="rabbit"
                    className="rounded-full w-48 h-48 fixed bottom-0 right-0 translate-x-1/2 -mr-12"
                  />
                )}
              </AnimatePresence>
              <AnimatePresence>
                {textIndex === initialText.length - 1 && (
                  <motion.img
                    initial={{ opacity: 0, x:150 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5, delay:1.5 }}
                    key={textIndex}
                    src={rabbit2}
                    alt="rabbit"
                    className="rounded-full w-36 h-36 fixed -bottom-36 right-9 translate-x-1/2"
                  />
                )}
              </AnimatePresence>
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
                    className="text-white text-lg font-semibold cursor-pointer text-center"
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
