import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function WalkingComponent() {
  const [start, setStart] = useState(true);
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
            <button>Click to send Dudul Bozo a message that you're starting to walk, so that you'll never have to walk without company</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
