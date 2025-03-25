import { motion } from "framer-motion";

export default function PrimaryButton({ onClick, children, className }) {
  return (
    <motion.button
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`bg-[#7D78A3] text-white font-medium rounded-full py-2 px-4 ${className}`}
    >
      {children}
    </motion.button>
  );
}
