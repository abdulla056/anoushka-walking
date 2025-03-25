import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import walking from "./assets/walking.gif";
import standing from "./assets/standing.png";
import PrimaryButton from "./PrimaryButton";

export default function WalkingComponent() {
  const [start, setStart] = useState(true);
  const [isWalking, setIsWalking] = useState(false);

  const sendMessage = () => {
    const phoneNumber = "+600196381343";
    const message = encodeURIComponent("Hey Dudul Bozo! I'm starting to walk!");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    setStart(false);
  };

  function onWalkingClick() {
    setIsWalking((prev) => !prev);
  }

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
            <PrimaryButton onClick={()=>sendMessage()}>
              Click to send Dudul Bozo a message that you're starting to walk,
              so that you'll never have to walk without company
            </PrimaryButton>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        <div className="w-full flex flex-col justify-center items-center relative">
          {!start && (
            <div className="relative">
              {/* GIF */}
              {isWalking ? (
                <img src={walking} alt="walking gif" className="relative" />
              ) : (
                <img src={standing} alt="walking gif" className="relative" />
              )}

              {/* Sparkles (only when walking) */}
              {isWalking && (
                <>
                  <motion.div
                    className="absolute w-6 h-6 bg-yellow-300 rounded-full opacity-80"
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
                    className="absolute w-4 h-4 bg-yellow-200 rounded-full opacity-90"
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
                    className="absolute w-5 h-5 bg-yellow-400 rounded-full opacity-75"
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
              )}
            </div>
          )}

          {/* Button */}
          {!start && (
            <PrimaryButton onClick={() => onWalkingClick()}>
              {isWalking ? "Click to stop walking" : "Click to start walking"}
            </PrimaryButton>
          )}
        </div>
      </AnimatePresence>
    </>
  );
}
