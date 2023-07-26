import { useAnimation, motion } from "framer-motion";
import { FC, ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

interface AnimationProps {
  children: ReactNode;
  hidden?: boolean;
}

const Animation: FC<AnimationProps> = ({ children, hidden = false }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (hidden) {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    } else {
      if (inView) {
        control.start("visible");
      }
    }
  }, [control, inView]);

  return (
    <motion.div
      variants={boxVariant}
      initial="hidden"
      animate={control}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default Animation;
