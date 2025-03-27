import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import walking from "./assets/walking.gif";
import standing from "./assets/standing.png";
import PrimaryButton from "./PrimaryButton";
import taylors from "./assets/taylors.png";
import road from "./assets/road.jpg";
import dlatour from "./assets/dlatour.png";

export default function WalkingComponent() {
  const [start, setStart] = useState(true);
  const [isWalking, setIsWalking] = useState(false);
  const [progress, setProgress] = useState(-150);

  const sendMessage = () => {
    const phoneNumber = "+600196381343";
    const message = encodeURIComponent("Hey Dudul Bozo! I'm starting to walk!");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    setStart(false);
  };

  function onWalkingClick() {
    setIsWalking((prev) => !prev);
  }

  useEffect(() => {
    let interval;
    if (isWalking) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isWalking]);

  return (
    <>
      <AnimatePresence>
        {start && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center flex flex-col gap-12"
          >
            <span className=" text-white text-center text-3xl">
              Now you can start walking! Thank you for going through the boring
              journey!
            </span>
            <PrimaryButton onClick={() => sendMessage()}>
              Click to send Dudul Bozo a message that you're starting to walk,
              so that you'll never have to walk without company
            </PrimaryButton>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        <div className="w-full flex flex-col justify-center items-center">
          {!start && (
            <>
              {/* Taylors Image */}
              <AnimatePresence>
                <div className="w-screen h-full">
                  <motion.img
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    src={taylors}
                    alt="taylors"
                    className="fixed left-0 top-1/2 transform -translate-y-1/2 w-auto z-10 size-1/2"
                  />
                  <motion.img
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    src={dlatour}
                    alt="dlatour"
                    className="fixed right-0 top-1/2 transform -translate-y-1/2 w-auto z-10 size-1/3"
                  />
                  <motion.img
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    src={road}
                    alt="road"
                    className="fixed left-0 bottom-0 transform -translate-y-1/2 w-auto size-12"
                  />
                </div>
              </AnimatePresence>
              <motion.img
                src={isWalking ? walking : standing}
                alt="walking gif"
                className="w-32 h-32 z-20"
                animate={{
                  x: `${progress * 1.02}%`, // Move across screen
                }}
                transition={{ type: "spring", stiffness: 50 }}
              />
              {/* Sparkles (only when walking) */}
              {isWalking && <Sparkles />}
            </>
          )}

          {/* Button */}
          {!start && (
            <PrimaryButton onClick={() => onWalkingClick()} className={"z-30"}>
              {isWalking ? "Click to stop walking" : "Click to start walking"}
            </PrimaryButton>
          )}
        </div>
      </AnimatePresence>
    </>
  );
}

function Sparkles() {
  return (
    <>
      <motion.div
        className="absolute w-6 h-6 bg-blue-500 rounded-full opacity-80"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.2, 1],
          opacity: [0, 1, 0],
          x: [0, -20, 20, -10],
          y: [0, -30, -40, -20],
        }}
        transition={{ duration: 1.2, repeat: Infinity }}
        style={{ left: "10%", top: "-20px" }}
      />
      <motion.div
        className="absolute w-4 h-4 bg-red-500 rounded-full opacity-90"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.5, 1],
          opacity: [0, 1, 0],
          x: [0, 15, -15, 5],
          y: [0, -25, -35, -15],
        }}
        transition={{ duration: 1.3, repeat: Infinity, delay: 0.3 }}
        style={{ right: "10%", top: "-15px" }}
      />
      <motion.div
        className="absolute w-5 h-5 bg-pink-500 rounded-full opacity-75"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.3, 1],
          opacity: [0, 1, 0],
          x: [0, -10, 10, -5],
          y: [0, -20, -30, -10],
        }}
        transition={{ duration: 1.4, repeat: Infinity, delay: 0.6 }}
        style={{ left: "40%", bottom: "-20px" }}
      />
    </>
  );
}
