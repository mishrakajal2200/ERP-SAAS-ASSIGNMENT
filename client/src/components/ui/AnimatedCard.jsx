// eslint-disable-next-line no-unused-vars
import  motion  from "framer-motion";

const AnimatedCard = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.5,
      }}

      whileHover={{
        scale: 1.02,
      }}

      className={`
        rounded-3xl
        bg-white/5
        border border-white/10
        backdrop-blur-2xl
        p-6
        shadow-2xl
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;