'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type Direction = 'up' | 'down' | 'left' | 'right';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  stagger?: boolean;
}

const FadeInWhenVisible: React.FC<Props> = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  stagger = false,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const getInitialY = () => {
    if (direction === 'up') return 40;
    if (direction === 'down') return -40;
    return 0;
  };

  const getInitialX = () => {
    if (direction === 'left') return 40;
    if (direction === 'right') return -40;
    return 0;
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: getInitialY(), x: getInitialX() },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        staggerChildren: stagger ? 0.15 : undefined,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
