import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import walking from "./assets/walking.gif";

export default function WalkingComponent() {
  const [start, setStart] = useState(true);
  const sendMessage = () => {
    const phoneNumber = "+600196381343";
    const message = encodeURIComponent("Hey Dudul Bozo! I'm starting to walk!");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  return (
    <>
      <AnimatePresence>
        {start && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center"
          >
            <span>
              Now you can start walking! Thank you for going through the boring
              journey!
            </span>
            <button onClick={sendMessage}>
              Click to send Dudul Bozo a message that you're starting to walk,
              so that you'll never have to walk without company
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
